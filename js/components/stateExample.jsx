var React = require('react');

var StateExample = React.createClass({
  getInitialState: function () {
    return {
      txt: this.props.food[0],
      img: this.props.food[0],
      backgroundColor: 'yellow'
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
    this.setState({
      txt: this.props.food[1],
      img: this.props.food[1]
    })
  },
  componentDidMount: function () {
    this.setState({
      txt: this.props.food[0],
      img: this.props.food[0]
    })
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
  _changeBackground: function (e) {
    e.preventDefault();
    this.setState({
      backgroundColor: 'blue'
    })
  },

  render: function () {
    console.log("render");
    return (
      <div style={{background: this.state.backgroundColor}}>
        <a href="http://www.google.com" onClick={this._changeBackground}>Go to Google</a>
        <input type="text" onChange={this._handleChange} value={this.state.txt} /><br />
        <img onClick={this._handleImgClick} src={"/images/" + this.state.img + ".jpeg"} />
      </div>
    )
  }
});

module.exports = StateExample;