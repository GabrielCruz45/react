function Food(){
    const food_one = "Orange 🍊";
    const food_two = "Banana 🍌";
    
    return(
        <ul>
            <li>Apple 🍎</li>
            <li>{food_one}</li>
            <li>{food_two.toUpperCase()}</li>
        </ul>
    );
};

export default Food;