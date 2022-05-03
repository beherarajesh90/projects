const mongoose = require('mongoose');
//change the url
const url='';
mongoose
  .connect(url)
  .then(() => {
    console.log('connected to mongo db');
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

const db = mongoose.connection;

// db.on('error', console.error.bind('error'));

// db.once('open', () => {
//   console.log('connected to mongo db');
// });
