const App = React.createClass({

    render(){
        return (
            <div>
                <div className="home-title">Welcome!</div>
                <div>More content coming soon. In the meantime, why don't you practice some blackjack!</div>
                <div><a href="/blackjack/">Blackjack Tools</a></div>
            </div>
        )
    }
});

ReactDOM.render(<App/>, document.getElementById('container'))
