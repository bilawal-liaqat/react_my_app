import React from 'react';
import './Person.css';

const person = (props) => {

    return(
        <div class="Person">
             <p onClick = {props.click}> I'm {props.name} and age is {props.age} </p>
            <input type = "text" onChange = {props.changed} />

        </div>
    ) 
};


export default person;