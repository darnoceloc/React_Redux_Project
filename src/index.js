import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App.js';
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker';
import Library from './Library'


let bookList = [
	{"title": "Hunger", "author": "Roxane Gay", "pages": 320},
	{"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
	{"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
	{"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

render(
	<Library books={bookList} />, 
	document.getElementById('root')
)


const store = configureStore();
const persistor = persistStore(store);

var Home = React.createClass({
    render: function() {
      return (<h1>Welcome to the Home Page</h1>);
    }
  });

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
        loading={<div>Loading...</div>}
        persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.status(200).send({ hello: "world!" });
// });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(3000, function () {
  console.log('Node server is running..');
});

module.exports = app;

serviceWorker.unregister();

