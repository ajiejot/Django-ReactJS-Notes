import React from 'react';
import TodoItems from './TodoItems'

  export class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items: [],
            input: '',
        }
    }

    handleEvent(e){
        this.setState({
            input: e.target.value
        })
    }
    

    addItem(e){
        var arr = this.state.items
        arr.push(this.state.input)
    
        this.setState({
            items: arr
        })
       
        console.log(this.state.items)
        e.preventDefault()
    }



    render(){
        return (
            <div>

                <form onSubmit={this.addItem.bind(this)}>
                    <input type="text" placeholder="add item" onChange={this.handleEvent.bind(this)}/>
                    <input type="submit" />
                </form>
                <TodoItems items={this.state.items} />
            </div>
        );
    }
}