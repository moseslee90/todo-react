class App extends React.Component {
    constructor() {
        super();
    }
    state = {
        list: [],
        word: ""
    };

    changeHandler = event => {
        this.setState({
            word: event.target.value
        });
        console.log("change", event.target.value);
    };

    clickHandler = () => {
        let word = this.state.word;
        if (word.length > 1 && word.length < 100) {
            let newList = this.state.list;
            //allow click functions
            let newKey = newList.length;
            console.log(newList);
            newList.push(<ListItem key={newKey} item={this.state.word} />);
            this.setState({
                list: newList
            });
        }
    };

    render() {
        return (
            <List
                changeHandler={this.changeHandler}
                clickHandler={this.clickHandler}
                list={this.state.list}
                word={this.state.word}
            />
        );
    }
}

class List extends React.Component {
    render() {
        // render the list with a map() here
        let listItems = this.props.list;
        console.log("rendering");
        return (
            <div className="list">
                <input
                    onChange={this.props.changeHandler}
                    value={this.props.word}
                />
                <button onClick={this.props.clickHandler}>add item</button>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

class ListItem extends React.Component {
    render() {
        let item = this.props.item;
        return <li>{item}</li>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
