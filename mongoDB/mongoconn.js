const mongoose = require('mongoose')
const uri = process.env.MONGO_CONNECT;

// Prints "MongoServerError: bad auth Authentication failed."
mongoose.connect(uri, {
  serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err.reason));

mongoose.connection.on('connected', () => console.log('connected'));

