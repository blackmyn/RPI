const mysql = require('mysql');

const config = {
  server: 'DESKTOP-S0U5D83',
  database: 'rpidb',
  options: {
    trustedConnection: true,
    enableArithAbort: true
  }
};

mysql.connect(config).then(pool => {
  console.log('Connected to MSSQL');
}).catch(err => {
  console.error('Error connecting to MSSQL:', err);
});


module.exports = connection;
