var React = require('react');

var AnotherComponent = React.createClass({
  getDefaultProps: function () {
    return {
      backgroundColor: 'pink'
    }
  },
  getInitialState: function () {
    return {
      backgroundColor: this.props.backgroundColor
    }
  },
  render: function () {
    console.log(this.state);
    return (
      <div className="square" style={{background: this.state.backgroundColor}}></div>
    );
  }
});

module.exports = AnotherComponent;