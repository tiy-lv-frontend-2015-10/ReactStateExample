var React = require('react');

var StateExample = React.createClass({
  getInitialState: function () {
    return {
      txt: this.props.food[0],
      img: this.props.food[0]
    };
  },
  getDefaultProps: function () {
    return {
      food: [
        'hamburger',
        'sushi'
      ]
    }
  },
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  _handleChange : function (e) {
    var foodArr = this.props.food;
    if (foodArr.indexOf(e.target.value) !== -1) {
      this.setState({
        txt: e.target.value,
        img: e.target.value
      });
    } else {
      this.setState({
        txt: e.target.value
      })
    }
  },
  _handleImgClick: function (e) {
    this.setState({
      txt: 'hamburger',
      img: 'hamburger'
    })
  },

  render: function () {
    console.log("render");
    return (
      <div>
        <input type="text" onChange={this._handleChange} value={this.state.txt} /><br />
        <img onClick={this._handleImgClick} src={"/images/" + this.state.img + ".jpeg"} />
      </div>
    )
  }
});

module.exports = StateExample;