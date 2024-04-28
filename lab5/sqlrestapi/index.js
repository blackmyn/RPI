const express = require('express');
const sql = require('mssql');

const app = express();
app.use(express.json());

const config = {
  server: 'DESKTOP-S0U5D83',
  database: 'kursdb',
  options: {
    trustedConnection: true,
    enableArithAbort: true 
  }
};

sql.connect(config).then(pool => {
  console.log('Connected to MSSQL');
}).catch(err => {
  console.error('Error connecting to MSSQL:', err);
});

// Маршрут для получения всех книг
app.get('/api/books', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM bookstable');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Error fetching books' });
  }
});

// Маршрут для получения книги по идентификатору
app.get('/api/books/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().input('id', sql.Int, bookId).query('SELECT * FROM bookstable WHERE id = @id');
    if (result.recordset.length === 0) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json(result.recordset[0]);
    }
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Error fetching book' });
  }
});

// Маршрут для добавления новой книги
app.post('/api/books', async (req, res) => {
  const { title, author, pages } = req.body;
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('title', sql.NVarChar, title)
      .input('author', sql.NVarChar, author)
      .input('pages', sql.Int, pages)
      .query('INSERT INTO bookstable (title, author, pages) VALUES (@title, @author, @pages)');
    res.status(201).json({ message: 'Book added successfully', id: result.insertId });
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ error: 'Error adding book' });
  }
});

// Маршрут для обновления информации о книге
app.put('/api/books/:id', async (req, res) => {
  const bookId = req.params.id;
  const { title, author, pages } = req.body;
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('title', sql.NVarChar, title)
      .input('author', sql.NVarChar, author)
      .input('pages', sql.Int, pages)
      .input('id', sql.Int, bookId)
      .query('UPDATE bookstable SET title = @title, author = @author, pages = @pages WHERE id = @id');
    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json({ message: 'Book updated successfully' });
    }
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ error: 'Error updating book' });
  }
});

// Маршрут для удаления книги
app.delete('/api/books/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().input('id', sql.Int, bookId).query('DELETE FROM bookstable WHERE id = @id');
    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json({ message: 'Book deleted successfully' });
    }
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Error deleting book' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
