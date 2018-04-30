import React from 'react';
import ReactDOM from 'react-dom';


class Task extends React.Component {

    render(){
        const name = this.props.name;
        return(
            <li>
                {name}
                <button onClick={() => {this.props.onDeleteTask(name)}}> - </button>
            </li>
        )
    }
}



class TodoList extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            list:       [],
            taskName:   ""
        }
        this.onDeleteTask = this.onDeleteTask.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }

    onDeleteTask(name){
        const newList = this.state.list;
        const pos = newList.indexOf(name);
        if(pos > -1){
            newList.splice(pos, 1);
        }
        this.setState({
            list: newList
        });
    }

    onAddTask(e){
        e.preventDefault();
        if(this.state.taskName === "") return;

        const newList = this.state.list;
        newList.push(this.state.taskName);
        this.setState({
            list:       newList,
            taskName:   ""
        });
    }

    nameChange(e){
        this.setState({taskName: e.target.value});
    }
    
    render(){
        const list = [];

        this.state.list.forEach((task, id) => {
            list.push(
                <Task name={task} key={id} onDeleteTask={this.onDeleteTask}/>
            );
        });

        return (
            <div>
                <h1> ToDo List:</h1>
                <ul>
                    {list}
                </ul>
                <form onSubmit={this.onAddTask}>
                    Task: <input 
                        type="text" 
                        name="Task" 
                        value={this.state.taskName} 
                        onChange={this.nameChange}
                        />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}


ReactDOM.render(
    <TodoList/>,
    document.getElementById('root')
);