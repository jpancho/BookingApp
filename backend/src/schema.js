const mongoose = require('mongoose');
const schema = mongoose.Schema;

let Performer = new schema({
  name: String,
  //style: String,
  //price: String,
  //description: String,
  //booked: Boolean
});

module.exports = mongoose.model('Performer', Performer);