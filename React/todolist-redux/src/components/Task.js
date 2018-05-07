import React from 'react';
import RemoveTask from './RemoveTask';

export const Task = ({name}) => {
    return(
        <li>
        {name}
        <RemoveTask name={name}/>
        </li>
    );
};