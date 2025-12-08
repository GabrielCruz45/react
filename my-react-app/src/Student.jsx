// props    -   read only properties that are shared between components
//              a parent component can send data to a child component
//              <Component key=value />

import PropTypes from 'prop-types';

function Student(props){
    const styles = {
        color: "dodgerblue",
    };
    
    return(
        <div className="student">
            <p style={styles}>Name: {props.name}</p>
            <p style={styles}>Age: {props.age}</p>
            <p style={styles}>Student: {props.isStudent ? "Yes" : "No"}</p> 
            {/* ternary operation because the value is a bool; won't display as is */}
        </div>
    );
};




// propType     -   a mechanism that ensures the passed value is the correct data type.
//                  age: PropTypes.number
//              **  it won't stop the application from running, just issue a warning
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};



// deaultProps  -   default values for props in case they are not passed down from the parent component
//                  name: "Guest"
Student.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: false
};
//                  to check, add an empty component in App.jsx


export default Student;
