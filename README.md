Booking Application created with React, Node, Express, and MongoDB.<br>
You can add, list, book, and delete performers.<br>

React is a frontend framework used to design SPA's, files under `/frontend/src` <br>
Node is a backend framework in conjunction with Express to build the API, server found in `/backend/src/server.js` <br>
MongoDB is a NoSQL database, schema is found in `/backend/src/schema.js`

Have [React](https://reactjs.org/), [Node](https://nodejs.org/en/) and [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) installed. <br>
In the `/frontend/` and `/backend/`, run to install packages:

### `npm install`
Make sure you run twice as `/frontend` and `/backend` require different packages.

In `/frontend/`, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In `/backend/src`, you can run:
### `node server`

Runs the server. <br>
Runs in [http://localhost:3001](http://localhost:3001) to view it in the browser.

In the project directory, you can run:

### `"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"`

Runs the mongo instance. <br>

### `"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"`

Runs the mongod instance. <br>
Make sure to create the db path first.

Initialization is done! <br>

This covers CREATE, READ, UPDATE, and DELETE. <br>
Frontend routes include `/`, `/performers`, `performers:id`, and `bookings/:id`<br>
API routes include `/performers`, `/performers/:id`, `/add`, `/update:id`, and `/delete:id`<br>

The implementation of backend API using Mongoose and Express. <br>
Mongoose "provides a straight-forward, schema-based solution to model your application data.- <br>
It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."<br>
Express "is a minimal and flexible Node.js web application framework that provides- <br>
a robust set of features for web and mobile applications."
```js routes.route('/add').post(function(req, res) {
  let performer = new Perfomer(req.body);
  performer.save()
    .then(performer => {
      res.status(200).json({'performer' : 'performer added sucessfully'});
    })
    .catch(err => {
      res.status(400).send('adding performer failed');
    });
});
```

An example of using the backend API to POST in the UI using Axios. <br>
Axios is a promise based HTTP client for the browser and node.js. <br>
Most of our RESTful calls will be found under `/frontend/src/components/`.
```js    let addPath = 'http://localhost:3001/add';
    axios.post(addPath, newPerformer)
      .then(res => console.log(res.data));
```
