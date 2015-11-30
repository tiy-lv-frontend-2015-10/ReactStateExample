require("bootstrap/dist/css/bootstrap.min.css");
require("../css/main.css"); 
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.jsx');

ReactDOM.render(<App />, document.getElementById('container'));