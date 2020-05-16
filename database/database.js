const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'root',
  database: 'gallery'
})

connection.connect((err) => {
  if(err) {
    console.log('error connecting to database: ', err);
  } else {
    console.log('connection to database successful!');
  }
});

module.exports = connection;