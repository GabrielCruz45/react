// click event  -   an interaction when an user clicks on a specific element
//                  we can respond to clicks by passing a callback to the onClick eventhandler

export default function Button_three(){
    const styles = {
        borderRadius : "5px",
        borderStyle : "none",
        color : "whotesmoke",
        backgroundColor : "black",
    };

    // let count = 0;

    // function handleClick(username){ 
    //     count++;
    //     alert(`${username} clicked the button ${count} times!`);
    // };

    const handleClickTwo = (event) => event.target.textContent = "Ouch! 😣"; // e as in event; it's an object


    return(
        // onClick={} also onDoubleClick={}
        <button className="button-three" style={styles} onDoubleClick={(e) => handleClickTwo(e)}>
            I do something!
        </button>
    );
};

