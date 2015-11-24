require("bootstrap/dist/css/bootstrap.min.css");
require("../css/main.css"); 
var React = require('react');
var ReactDOM = require('react-dom');
var StateExample = require('./components/stateExample.jsx');

var food = [
  'beef',
  'vegetable',
  'hamburger',
  'sushi'
]

ReactDOM.render(<StateExample food={food}/>, document.getElementById('container'));