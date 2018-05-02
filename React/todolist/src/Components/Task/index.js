import React from 'react';
import ReactDOM from 'react-dom';

class Task extends React.Component {

    onDelete = (() => {this.props.onDeleteTask(this.props.name)}); 

    render(){
        const name = this.props.name;
        return(
            <li>
                {name}
                <button onClick={this.onDelete}> - </button>
            </li>
        )
    }
}

export default Task;