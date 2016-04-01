var React = require("react");
var ReactDOM = require("react-dom");


var ClickButton = React.createClass({
    render: function() {
        return <button onClick={this.props.incrementClick}>Click me</button>
    }
});


var ClicksCount = React.createClass({
    render: function() {
        return <p>You've clicked {this.props.clicks} time(s).</p>
    }
});

var HelloWorld = React.createClass({
    getInitialState: function() {
        return {clicks: 0};
    },

    incrementClick: function() {
        this.setState({clicks: this.state.clicks + 1});
    },

    render: function() {
        return (
            <div>
                <ClickButton incrementClick={this.incrementClick} />
                <ClicksCount clicks={this.state.clicks} />
            </div>
        )
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);
