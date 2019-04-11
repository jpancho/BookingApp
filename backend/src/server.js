const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = express.Router();
const PORT = 3001;

/**
 * This is our backend. We use cors and body-parser for resource sharing
 * and parsing middleware. We also run our MongoDB through mongoose connection.
 * Our database schema can be found in /schema.js.
 */
app.use(cors());
app.use(bodyParser.json());

const Perfomer = require('./schema');
mongoose.connect('mongodb://127.0.0.1:27017/performers', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB connection established successfully");
});

/**
 * All of these are our API implementations. Updates our database using mongoose.
 */
routes.route('/performers').get(function(req, res) {
  Perfomer.find(function(err, performers) {
    if (err) {
      console.log(err);
    } else {
      res.json(performers);
    }
  })
});

routes.route('/performers/:id').get(function(req, res) {
  let id = req.params.id;
  Perfomer.findById(id, function(err, performer) {
    res.json(performer);
  });
});

routes.route('/add').post(function(req, res) {
  let performer = new Perfomer(req.body);
  performer.save()
    .then(performer => {
      res.status(200).json({'performer' : 'performer added sucessfully'});
    })
    .catch(err => {
      res.status(400).send('adding performer failed');
    });
});

routes.route('/update/:id').post(function(req, res) {
  Perfomer.findById(req.params.id, function(err, performer) {
    if (!performer) {
      res.status(404).send('data is not found');
    } else {
      performer.name = req.body.name;
      performer.style = req.body.style;
      performer.price = req.body.price;
      performer.description = req.body.description;
      performer.booked = req.body.booked;
      performer.save()
        .then(performer => {
          res.json('Performer updated');
      })
        .catch(err => {
          res.status(400).send("Update not possible");
      });
    }
  });
});

routes.route('/delete/:id').delete(function(req, res) {
  Perfomer.findOneAndDelete(req.params.id, function(err, performer) {
    if (!performer) {
      res.status(404).send('data is not found');
    } else {
      res.status(200).send(performer);
    }
  })
});

app.use('/', routes);
app.listen(PORT, function() {
  console.log("Server running on Port: " + PORT);
});