class App extends React.Component {
    constructor() {
        super();
    }
    state = {
        list: [],
        listMap: {},
        word: "",
        keyCount: 0
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
            let newKey = this.state.keyCount;
            this.state.keyCount++;
            newList.push(
                <ListItem
                    listid={newKey}
                    key={newKey}
                    item={this.state.word}
                    deleteItem={this.deleteItem}
                />
            );
            console.log(newList);
            let listMap = this.state.listMap;
            listMap[newKey] = (
                <ListItemMap
                    listid={newKey}
                    key={newKey}
                    item={this.state.word}
                    deleteItem={this.deleteItemMap}
                />
            );
            this.setState({
                list: newList
            });
        }
    };

    deleteItem = event => {
        //removes this List Item in list with the particular key
        let list = this.state.list;
        let itemId = parseInt(event.target.attributes.listid.value);
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (itemId === element.props.listid) {
                list.splice(index, 1);
                this.setState({
                    list: list
                });
            }
        }
    };
    deleteItemMap = event => {
        //delete instructions for map variant
        let itemId = parseInt(event.target.attributes.listid.value);
        let listMap = this.state.listMap;
        delete listMap[itemId];
        this.setState({
            listMap: listMap
        });
    };

    render() {
        return (
            <div>
                <List
                    changeHandler={this.changeHandler}
                    clickHandler={this.clickHandler}
                />
                <ItemList list={this.state.list} />
                <h1>other list</h1>
                <ItemListMap list={this.state.listMap} />
            </div>
        );
    }
}

class List extends React.Component {
    render() {
        // render the list with a map() here
        console.log("rendering");
        return (
            <div className="list">
                <input onChange={this.props.changeHandler} />
                <button onClick={this.props.clickHandler}>add item</button>
            </div>
        );
    }
}

class ItemList extends React.Component {
    render() {
        let listItems = this.props.list;
        return <ul>{listItems}</ul>;
    }
}

class ItemListMap extends React.Component {
    render() {
        let listItemsMap = this.props.list;
        let listItems = Object.values(listItemsMap);
        return <ul>{listItems}</ul>;
    }
}

class ListItem extends React.Component {
    render() {
        let item = this.props.item;
        return (
            <div>
                <li>{item}</li>
                <button
                    onClick={this.props.deleteItem}
                    listid={this.props.listid}>
                    delete
                </button>
            </div>
        );
    }
}
class ListItemMap extends React.Component {
    render() {
        let item = this.props.item;
        return (
            <div>
                <li>{item}</li>
                <button
                    onClick={this.props.deleteItem}
                    listid={this.props.listid}>
                    delete
                </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
