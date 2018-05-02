import React from 'react';
import ReactDOM from 'react-dom';

class InputBar extends React.Component {

    render(){
        return(
            <form onSubmit={this.props.onAddTask}>
                Task: <input 
                    type="text" 
                    name="Task" 
                    value={this.props.value} 
                    onChange={this.props.onChange}
                    />
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default InputBar;