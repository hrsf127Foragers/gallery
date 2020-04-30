const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restaurants'
})

connection.connect((err) => {
  if(err) {
    console.log('error connecting to database: ', err);
  } else {
    console.log('connection to database successful!');
  }
});

module.exports = connection;