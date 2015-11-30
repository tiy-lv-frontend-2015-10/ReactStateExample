var React = require('react');

var AnotherComponent = React.createClass({
  getDefaultProps: function () {
    return {
      backgroundColor: 'pink'
    }
  },
  render: function () {
    return (
      <div className="square" style={{background: this.props.backgroundColor}}></div>
    );
  }
});

module.exports = AnotherComponent;