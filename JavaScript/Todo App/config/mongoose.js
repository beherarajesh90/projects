const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.oapxe.mongodb.net/todo-db?retryWrites=true&w=majority'
  )
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
