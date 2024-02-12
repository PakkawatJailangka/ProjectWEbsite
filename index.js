const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.stack);
      return;
    }
    console.log('เชื่อมต่อสำเร็จ');
  });

  app.get('/data', (req, res) => {
    connection.query('SELECT * FROM stock', (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  });

  app.get('/data-sell', (req, res) => {
    connection.query('SELECT * FROM test.sell', (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  });

  app.get('/login_admin', (req, res) => {
    res.sendFile(__dirname+ "/admin_login.html")
  });

app.get("/customer", (req, res) => {
  res.sendFile(__dirname + "/index1.html");
});

/////////////////////////////////
const users = [
  { username: 'admin', password: '123' },
  { username: 'owner', password: '123' },
  { username: 'son', password: '123' },
];

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.redirect('/stock');
  } else {
    res.send('Invalid username or password');
  }
});


//////////////////////////////////
app.get("/stock", (req, res) => {
  res.sendFile(__dirname + "/index2.html");
});

app.get("/customer-list", (req, res) => {
  res.sendFile(__dirname + "/index1.html");
});

app.get("/add-stock", (req, res) => {
  res.sendFile(__dirname + "/addstock.html");
});

app.post('/insert-stock', (req, res) => {
  const numeng = req.body.numeng;
  const name = req.body.name;
  const year = req.body.year;
  const type = req.body.type;
  const color = req.body.color;
  const brand = req.body.brand;
  const seat = req.body.seat;
  const gear = req.body.gear;
  const price = req.body.price;
  // create an array of values to insert into the database
  const values = [numeng, name, year, type, color, brand, seat, gear,price];

  // build the SQL query using placeholders for the values
  const query = 'INSERT INTO stock (numeng, name, year, type, color, brand, seat, gear,price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  // execute the query with the values
  connection.query(query, values, (error, results, fields) => {
    if (error) throw error;
    res.redirect('/stock');
  });
});


app.post('/delete-stock-tag', (req, res) => {
  const tagId = req.body.tagId;

  // build the SQL query to delete the row with the given tag_id
  const query = 'DELETE FROM stock WHERE id = ?';

  // execute the query with the tag_id value
  connection.query(query, [tagId], (error, results, fields) => {
    if (error) throw error;

    // check if any rows were affected
    if (results.affectedRows > 0) {
      // if the delete was successful, redirect to the stock page
      res.redirect('/stock');
    } else {
      // if no rows were affected, display an error message
      res.status(404).send('Tag not found');
    }
  });
});

/////////////////////////////////////////////////////////////////
app.post('/save-data', (req, res) => {
  const id = req.body.id;

  // สร้าง SQL query สำหรับเลือกข้อมูลจาก test.stock โดยใช้ ID
  const selectQuery = 'SELECT * FROM test.stock WHERE id = ?';

  // Execute the query with the ID value
  connection.query(selectQuery, [id], (selectError, selectResults) => {
    if (selectError) throw selectError;


    // Check if any rows were found
    if (selectResults.length > 0) {
      // สร้าง SQL query สำหรับ insert ข้อมูลลงใน test.sell
      const insertQuery = 'INSERT INTO test.sell (numeng, name, brand, seat, gear, color, year, price, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

      // Adjust the values accordingly based on the columns in test.sell
      const valuesToInsert = [
        selectResults[0].numeng,
        selectResults[0].name,
        selectResults[0].brand,
        selectResults[0].seat,
        selectResults[0].gear,
        selectResults[0].color,
        selectResults[0].year,
        selectResults[0].price,
        selectResults[0].type
      ];

      // Execute the query with the data
      connection.query(insertQuery, valuesToInsert, (insertError) => {
        if (insertError) throw insertError;

        // Continue with any additional operations, if needed

        // Redirect to the page you want
        res.redirect('/stock');
      });
    } else {
      // If no rows were found, display an error message
      res.status(404).send('ID not found');
    }
  });
});



/////////////////////////////////////////////////////////////////

app.post('/delete-stock-tag', (req, res) => {
  const tagId = req.body.tagId;

  // build the SQL query to delete the row with the given tag_id
  const query = 'DELETE FROM stock WHERE id = ?';

  // execute the query with the tag_id value
  connection.query(query, [tagId], (error, results, fields) => {
    if (error) throw error;

    // check if any rows were affected
    if (results.affectedRows > 0) {
      // if the delete was successful, redirect to the stock page
      res.redirect('/stock');
    } else {
      // if no rows were affected, display an error message
      res.status(404).send('Tag not found');
    }
  });
});
app.post('/insert-customer', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const tel = req.body.tel;
  const money = req.body.money;

  // Create an SQL query to insert the customer data into the database
  const query = 'INSERT INTO customer (name, email, tel, money) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, email, tel, money], (error, results, fields) => {
    if (error) throw error;

    // Redirect the user to the customer list page
    res.redirect('/customer-list');
  });
});

app.get('/customer-data', (req, res) => {
  // Query the database for customer data
  const query = 'SELECT * FROM customer';
  connection.query(query, (error, results, fields) => {
    if (error) throw error;

    // Return the customer data as a JSON response
    res.json(results);
  });
});



app.get('/account', (req, res) => {
  res.sendFile(__dirname + '/index5.html');
});








app.listen(3308, () => {
  console.log('Server is listening on port 3308');
});



