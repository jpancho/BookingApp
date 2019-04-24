const mongoose = require('mongoose');
const schema = mongoose.Schema;

// This is our mongo schema, a json object Performer that 
// has name, style, price, description, booked.
let Performer = new schema({
  name: String,
  style: String,
  price: Number,
  description: String,
  booked: Boolean
});

module.exports = mongoose.model('Performer', Performer);
