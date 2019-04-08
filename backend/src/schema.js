const mongoose = require('mongoose');
const schema = mongoose.Schema;

// "C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe" mongo instance
// "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db" mongod instance

let Performer = new schema({
  name: String,
  style: String,
  price: Number,
  description: String,
  booked: Boolean
});

module.exports = mongoose.model('Performer', Performer);