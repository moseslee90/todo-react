class List extends React.Component {
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
        // render the list with a map() here
        let listItems = this.state.list;
        console.log("rendering");
        return (
            <div className="list">
                <input onChange={this.changeHandler} value={this.state.word} />
                <button onClick={this.clickHandler}>add item</button>
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

ReactDOM.render(<List />, document.getElementById("root"));
