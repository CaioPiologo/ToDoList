import React, { Component } from 'react';
import {connect} from 'react-redux';
import { handleChange } from '../utils';
import { addTask } from '../actions';

class AddTodo extends Component {

    constructor(props){
        super(props);
        this.state = {
            value:  ""
        };
        this.handleChange = handleChange.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
    }

    onAddTask(e){
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(addTask(this.state.value));
        this.setState({
            value: ""
        });
    }

    render(){
        return (
            <div>
                <form>
                    <label>Task: </label>
                    <input
                        type="text"
                        name="value"
                        onChange={this.handleChange}
                        value={this.state.value}
                        placeholder="Buy milk"
                    />
                    <button onClick={this.onAddTask}>+</button>
                </form>
            </div>
        );
    };
}

export default connect()(AddTodo);