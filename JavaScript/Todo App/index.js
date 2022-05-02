const express = require('express');
const path = require('path');

const db = require('./config/mongoose');
const router = require('./routes/index');
const port = 8000;

const app = express();

//parse body
app.use(express.urlencoded({ extended: true }));

//template engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

//adding static files
app.use('*/css', express.static(path.join(__dirname, './assets/css')));
app.use('*/js', express.static(path.join(__dirname, './assets/js')));

//home router
app.use('/', router);

//listen on port 8000
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in starting the server: ${err}`);
    return;
  }
  console.log(`server started on port: ${port}`);
});
