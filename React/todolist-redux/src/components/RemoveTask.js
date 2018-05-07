import React from 'react';
import {connect} from 'react-redux';
import { removeTask } from '../actions';

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (pos) => {
            dispatch(removeTask(pos))
        },
    }
}

const RemoveTask = ({name, todoList, onDelete}) => {
    const pos = todoList.map((task) => {return task.name}).indexOf(name);
    return (
        <button onClick={() => {
            return (
                onDelete(pos)
            );
        }}>-</button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveTask);