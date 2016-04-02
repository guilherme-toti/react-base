var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Test = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello from Test</p>
        <Link to='/'>
          Go Home
        </Link>
      </div>
    )
  }
});

module.exports = Test;
