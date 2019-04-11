Booking Application created with React, Node, Express, and MongoDB 

React is a frontend framework used to design SPA's, files under `/frontend/src` <br>
Node is a backend framework in conjunction with Express to build the API, server found in `/backend/src/server.js` <br>
MongoDB is a NoSQL database, schema is found in `/backend/src/schema.js`

Have React, Node and MongoDB installed. <br>
In the `/frontend/` and `/backend/`, run to install packages:

### `npm install`

In `/frontend/`, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In the backend source directory, you can run:
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

You can add, list, book, and delete performers.<br>
Routes include `/`, `/performers`, `performers:id`, and `bookings/:id`
