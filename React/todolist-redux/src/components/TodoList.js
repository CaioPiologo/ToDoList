import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Task } from './Task';


const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
    };
};

class TodoList extends Component {
    render(){
        const list = this.props.todoList.map(task => (
            <Task 
                key={task.id}
                name={task.text}
            />
        ));
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    };
}

export default connect(mapStateToProps, null)(TodoList);