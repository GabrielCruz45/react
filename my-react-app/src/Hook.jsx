// React hook   -   Special function that allows functional components to use React features without writing class components
//                  if the function's name starts with use, it's probably a react hook                  
//                  (useState, useEffect, useContext, useReducer, useCallback, ...)

// useState()   -   A React hook that allows the creation of a stateful variable 
//                  AND a setter function to update its value in the Virtual DOM
//                  [name, setName]

import {useState} from 'react';


export default function Hook(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);



    const updateName = () => {
        setName("siccccccc");
    };

    const updateAge = () => {
        setAge(age + 1);
    };
    
    const updateEmployment = () => {
        setIsEmployed(!isEmployed);
    };



    return(
        <div>
            <p>
                Name: {name}
            </p>
            <button onClick={updateName}>
                Set Name
            </button>

            <p>
                Age: {age}
            </p>
            <button onClick={updateAge}>
                Increment age
            </button>
            
            <p>
                Is employed? {isEmployed ? "Yes" : "No"} {/* ternary operator */}
            </p>
            <button onClick={updateEmployment}>
                Update employment
            </button>
        </div>
    );
};