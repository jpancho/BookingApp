Booking Application created with React, Node, Express, and MongoDB.<br>
You can add, list, book, and delete performers.<br>

React is a frontend framework used to design SPA's, files under `/frontend/src` <br>
Node is a backend framework in conjunction with Express to build the API, server found in `/backend/src/server.js` <br>
MongoDB is a NoSQL database, schema is found in `/backend/src/performer.js`

Have [React](https://reactjs.org/), [Node](https://nodejs.org/en/) and [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) installed. <br>
In the `/frontend/` and `/backend/`, run to install packages:

### `npm install`
Make sure you run twice as `/frontend` and `/backend` require different packages.

In `/frontend/`, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In `/backend`, you can run:
### `npm run server`

Runs the server. <br>
Runs in [http://localhost:3001](http://localhost:3001) to view it in the browser.

In the project directory, run the [mongo instance](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#start-mdb-edition-as-a-windows-service):

### `"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"`

In the project directory, [run the mongod instance](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#run-mdb-edition-from-the-command-interpreter).
### `"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"`

Follow the links closely.
We must run two instances so our MongoDB works and updates.

Initialization is done! <br>

This covers CREATE, READ, UPDATE, and DELETE. <br>
Frontend routes include `/`, `/performers`, `performers:id`, and `bookings/:id`<br>
  Find in `frontend/src/App.js` <br>
API routes include `/performers`, `/performers/:id`, `/add`, `/update:id`, and `/delete:id`<br>
  Find in `backend/src/server.js`<br>

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
```js    
let addPath = 'http://localhost:3001/add';
  axios.post(addPath, newPerformer)
    .then(res => console.log(res.data));
```
