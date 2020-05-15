const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '172.17.0.2',
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