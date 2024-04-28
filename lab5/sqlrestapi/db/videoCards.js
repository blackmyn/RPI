const mysql = require('mysql');


const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'sql11.freesqldatabase.com',
  user: 'sql11695774',
  password: 'L5umWzqLUE',
  database: 'sql11695774'
});

function query(sql, args) {
  return new Promise((resolve, reject) => {
    pool.query(sql, args, (err, rows) => {
      if (err)
        return reject(err);
      resolve(rows);
    });
  });
}


const VideoCard = {
  getAll: async function () {
    const rows = await query('SELECT * FROM videocards');
    return rows;
  },

  getById: async function (id) {
    const rows = await query('SELECT * FROM videocards WHERE id = ?', [id]);
    return rows[0];
  },

  create: async function (videoCard) {
    const result = await query('INSERT INTO videocards SET ?', videoCard);
    return result.insertId;
  },

  update: async function (id, videoCard) {
    const result = await query('UPDATE videocards SET ? WHERE id = ?', [videoCard, id]);
    return result.affectedRows;
  },

  delete: async function (id) {
    const result = await query('DELETE FROM videocards WHERE id = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = VideoCard;
