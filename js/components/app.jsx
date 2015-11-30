var React = require('react');
var StateExample = require('./stateExample.jsx');
var AnotherComponent = require('./anotherComponent.jsx');

var food = [
  'beef',
  'vegetable',
  'hamburger',
  'sushi'
];

var App = React.createClass({
  getInitialState: function () {
    return {
      backgroundColor: '#666'
    }
  },
  _changeBackgroundColor: function (color) {
    this.setState({
      backgroundColor: color
    })
  },
  render: function () {
    return (
      <div className="full" style={{background: this.state.backgroundColor}}>
        <StateExample food={food} bgcb={this._changeBackgroundColor} />
        <AnotherComponent backgroundColor={this.state.backgroundColor} />
      </div>
    )
  }
});

module.exports = App;