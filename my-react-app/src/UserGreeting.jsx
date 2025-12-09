// conditional rendering    -   allows you to control what gets rendered 
//                              in your application based on certain conditions
//                              (show, hide, or change components)

import PropTypes from 'prop-types';

function UserGreeting(props){

    const styles = {
        color: "dodgerblue"
    };

    // readability
    const welcomeMessage = <h2 style={styles} className="welcome-message">Welcome {props.username}</h2>;
    const loginPrompt = <h2 style={styles} className="login-prompt">Please log in.</h2>;
    

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
};

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "guest",
};

export default UserGreeting;