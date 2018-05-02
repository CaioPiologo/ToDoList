import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Components/Task';
import InputBar from './Components/InputBar';


class TodoList extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            list:       [],
            taskName:   ""
        }
        this.onDeleteTask = this.onDeleteTask.bind(this);
        this.onAddTask =    this.onAddTask.bind(this);
        this.nameChange =   this.nameChange.bind(this);
    }

    onDeleteTask(name){
        const newList = this.state.list.slice();
        const pos =     newList.indexOf(name);

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

        const newList = this.state.list.slice();
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
                <InputBar 
                    value={this.state.taskName}
                    onAddTask={this.onAddTask}
                    onChange={this.nameChange}
                />
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}


ReactDOM.render(
    <TodoList/>,
    document.getElementById('root')
);