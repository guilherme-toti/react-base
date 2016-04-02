var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Home = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello from Home</p>
        <Link to='/test'>
          Go to test
        </Link>
      </div>
    )
  }
});

module.exports = Home;
