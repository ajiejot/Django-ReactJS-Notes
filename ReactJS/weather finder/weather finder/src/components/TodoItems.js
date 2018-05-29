import React from 'react'

export class TodoItems extends React.Component{


    createTasks(item,index){
        return <li key={index}>{item}</li> 

    }

    deleteItem(){ 
        alert("DELETE")
    }


    render(){
        var todoEntries = this.props.items
        var listItems = todoEntries.map(this.createTasks)
        return (
            <div className="board">
                <ul className="card">
                    {listItems}
                    
                </ul>
                
            </div>
        )
    }
}

export default TodoItems;