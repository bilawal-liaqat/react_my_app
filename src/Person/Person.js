import React from 'react';

const person = (props) => {

    return(
        <div>
             <p onClick = {props.click}> I'm {props.name} and age is {props.age} </p>
            <input type = "text" onChange = {props.changed} />

        </div>
    ) 
};


export default person;