const dealerCompare = {
    'Hard':[
        [0],
        [1],
        [2],
        [3],
        [4],
        [-1,-1,  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',   'Hit',   'Hit'],
        [-1,-1,  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',   'Hit',   'Hit'],
        [-1,-1,  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',   'Hit',   'Hit'],
        [-1,-1,  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',  'Hit',   'Hit',   'Hit'],
        [-1,-1,  'Hit',  'Double',  'Double',  'Double',  'Double',  'Hit',  'Hit',  'Hit',   'Hit',   'Hit'],
        [-1,-1,  'Double',  'Double',  'Double',  'Double',  'Double',  'Double',  'Double',  'Double',   'Hit',   'Hit'],
        [-1,-1,  'Double',  'Double',  'Double',  'Double',  'Double',  'Double',  'Double',  'Double',   'Double',   'Double'],
        [-1,-1,  'Hit',  'Hit',  'Stay',  'Stay',  'Stay',  'Hit',  'Hit',  'Hit',   'Hit',   'Hit'],
        [-1,-1,  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Hit',  'Hit',  'Hit',   'Hit',   'Hit'],
        [-1,-1,  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Hit',  'Hit',  'Hit',   'Hit',   'Hit'],
        [-1,-1,  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Hit',  'Hit',  'Hit',   'Hit',   'Hit'],
        [-1,-1,  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Hit',  'Hit',  'Hit',   'Hit',   'Hit'],
        [-1,-1,  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',   'Stay',   'Stay'],
        [-1,-1,  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',   'Stay',   'Stay'],
        [-1,-1,  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',   'Stay',   'Stay'],
        [-1,-1,  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',   'Stay',   'Stay'],
        [-1,-1,  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',  'Stay',   'Stay',   'Stay']
    ],
    'Soft':[
        [0],
        [1],
        [2],
        [3],
        [4],
        [5],
        [6],
        [7],
        [8],
        [9],
        [11],
        [11],
        [12],
        [-1,  -1,  'Hit', 'Hit', 'Hit', 'Double', 'Double', 'Hit', 'Hit', 'Hit', 'Hit', 'Hit'],
        [-1,  -1,  'Hit', 'Hit', 'Hit', 'Double', 'Double', 'Hit', 'Hit', 'Hit', 'Hit', 'Hit'],
        [-1,  -1,  'Hit', 'Hit', 'Double', 'Double', 'Double', 'Hit', 'Hit', 'Hit', 'Hit', 'Hit'],
        [-1,  -1,  'Hit', 'Hit', 'Double', 'Double', 'Double', 'Hit', 'Hit', 'Hit', 'Hit', 'Hit'],
        [-1,  -1,  'Hit', 'Double', 'Double', 'Double', 'Double', 'Hit', 'Hit', 'Hit', 'Hit', 'Hit'],
        [-1,  -1,  'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Hit', 'Hit', 'Hit'],
        [-1,  -1,  'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay'],
        [-1,  -1,  'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay'],
        [-1,  -1,  'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay']
    ],
    'Pair':[
        [0],
        [1],
        [-1,  -1,  'Split', 'Split', 'Split', 'Split', 'Split', 'Split', 'Hit', 'Hit', 'Hit', 'Hit'],
        [-1,  -1,  'Split', 'Split', 'Split', 'Split', 'Split', 'Split', 'Hit', 'Hit', 'Hit', 'Hit'],
        [-1,  -1,  'Hit', 'Hit', 'Hit', 'Split', 'Split', 'Hit', 'Hit', 'Hit', 'Hit', 'Hit'],
        [-1,  -1,  'Double', 'Double', 'Double', 'Double', 'Double', 'Double', 'Double', 'Double', 'Stay', 'Stay'],
        [-1,  -1,  'Split', 'Split', 'Split', 'Split', 'Split', 'Hit', 'Hit', 'Hit', 'Hit', 'Hit'],
        [-1,  -1,  'Split', 'Split', 'Split', 'Split', 'Split', 'Split', 'Hit', 'Hit', 'Hit', 'Hit'],
        [-1,  -1,  'Split', 'Split', 'Split', 'Split', 'Split', 'Split', 'Split', 'Split', 'Split', 'Split'],
        [-1,  -1,  'Split', 'Split', 'Split', 'Split', 'Split', 'Stay', 'Split', 'Split', 'Stay', 'Stay'],
        [-1,  -1,  'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay', 'Stay'],
        [-1,  -1,  'Split', 'Split', 'Split', 'Split', 'Split', 'Split', 'Split', 'Split', 'Split', 'Split']
        ]

};
const handType = ['Hard', 'Soft', 'Pair'];
const getRandomIntInRange = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const situations = [
    {
        'min':5,
        'max':21,
        'description': 'A Hard ',
        'table':'Hard'
    },
    {
        'min':13,
        'max':21,
        'description': 'A Soft ',
        'table':'Soft'
    },
    {
        'min':2,
        'max':11,
        'description': 'A Pair of ',
        'table':'Pair'
    }
];
const BlackJackQuiz = React.createClass({
    getInitialState() {
        let startType = situations[Math.floor(Math.random() * 3)]
        return {
            dealerHand: getRandomIntInRange(2, 11),
            yourHand: getRandomIntInRange(startType.min, startType.max),
            typeOfHand:startType.table,
            answer:''
        }
    },
    resetQuiz(){
        let startType = situations[Math.floor(Math.random() * 3)]
        this.setState({
            dealerHand: getRandomIntInRange(2, 11),
            yourHand: getRandomIntInRange(startType.min, startType.max),
            typeOfHand:startType.table,
            answer:''
        })
    },
    compareHands(input){
        let dealer = this.state.dealerHand
        let you = this.state.yourHand
        let strat = dealerCompare[this.state.typeOfHand][you][dealer]
        if(input === strat){
            this.setState({answer:'Correct'})
        } else {
            this.setState({answer:'Try Again'})
        }
    },
    render() {
        return (
            <div className="quiz-content">
                <div className="quiz-prompt">The dealer is showing a {this.state.dealerHand} and you have a {this.state.typeOfHand} {this.state.typeOfHand === 'Pair'?('of '+this.state.yourHand+'\'s'):this.state.yourHand} you should?</div>
                <div className="quiz-answer-buttons">
                    <button onClick={()=>{this.compareHands('Hit')}}>Hit</button>
                    <button onClick={()=>{this.compareHands('Stay')}}>Stay</button>
                    <button onClick={()=>{this.compareHands('Double')}}>Double</button>
                    <button onClick={()=>{this.compareHands('Split')}}>Split</button>
                </div>
                <div className="answer">Answer: <div className="revealed">{this.state.answer}</div></div>
                <div>
                    <button onClick={()=>{this.resetQuiz()}}>Next</button>
                </div>

            </div>
        )
    }
});
const BlackJackLookUp = React.createClass({
    getInitialState() {
        return {
            dealerHand: 2,
            yourHand: 5,
            typeOfHand: 'Hard'
        }
    },
    render(){
        return(<div className="lookup-content">
            <div className="lookup-your-hand">
                <div>
                    If you have a:
                </div>
                <select onChange={e => this.setState({ yourHand: e.target.value.split('-')[1],  typeOfHand: e.target.value.split('-')[0]})}>
                    <option value="" disabled>Hard</option>
                    <option value="Hard-5">Hard 5</option>
                    <option value="Hard-6">Hard 6</option>
                    <option value="Hard-7">Hard 7</option>
                    <option value="Hard-8">Hard 8</option>
                    <option value="Hard-9">Hard 9</option>
                    <option value="Hard-10">Hard 10</option>
                    <option value="Hard-11">Hard 11</option>
                    <option value="Hard-12">Hard 12</option>
                    <option value="Hard-13">Hard 13</option>
                    <option value="Hard-14">Hard 14</option>
                    <option value="Hard-15">Hard 15</option>
                    <option value="Hard-16">Hard 16</option>
                    <option value="Hard-17">Hard 17</option>
                    <option value="Hard-18">Hard 18</option>
                    <option value="Hard-19">Hard 19</option>
                    <option value="Hard-20">Hard 20</option>
                    <option value="Hard-21">Hard 21</option>
                    <option value="" disabled>Soft</option>
                    <option value="Soft-13">Soft 13</option>
                    <option value="Soft-14">Soft 14</option>
                    <option value="Soft-15">Soft 15</option>
                    <option value="Soft-16">Soft 16</option>
                    <option value="Soft-17">Soft 17</option>
                    <option value="Soft-18">Soft 18</option>
                    <option value="Soft-19">Soft 19</option>
                    <option value="Soft-20">Soft 20</option>
                    <option value="" disabled>Splits</option>
                    <option value="Pair-2">2,2</option>
                    <option value="Pair-3">3,3</option>
                    <option value="Pair-4">4,4</option>
                    <option value="Pair-6">6,6</option>
                    <option value="Pair-7">7,7</option>
                    <option value="Pair-8">8,8</option>
                    <option value="Pair-9">9,9</option>
                    <option value="Pair-11">A,A</option>
                </select>
            </div>
            <div className="lookup-dealer-hand">
                <div>
                    And the dealer is showing:
                </div>
                    <select onChange={e => this.setState({ dealerHand: e.target.value })}>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">A</option>
                    </select>
            </div>
            <div>
                You Should:
            </div>
            <div className="revealed">
                {dealerCompare[this.state.typeOfHand][this.state.yourHand][this.state.dealerHand]}
            </div>
        </div>)
    }

});
const App = React.createClass({
    getInitialState() {
        return {
            activeIndex:0
        }
    },
    render(){
        return (
            <div>
                <div className="blackjack-title">Basic Blackjack Strategy</div>
                <div className='tabs'>
                    <div className={this.state.activeIndex === 0 ? 'tab active':'tab'} onClick={()=> this.setState({activeIndex: 0})}>Quiz</div>
                    <div className={this.state.activeIndex === 1 ? 'tab active':'tab'} onClick={()=> this.setState({activeIndex: 1})}>Look Up</div>
                </div>
                <div>
                   {(this.state.activeIndex === 0 && <BlackJackQuiz/>)}
                   {(this.state.activeIndex === 1 && <BlackJackLookUp/>)}
               </div>
            </div>
        )
    }
});

ReactDOM.render(<App/>, document.getElementById('container'))
