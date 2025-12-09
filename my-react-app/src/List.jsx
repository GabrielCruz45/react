function List() {
    const fruits = [
        {id: 1, name: "pear",          calories: 102}, 
        {id: 2, name: "banana",        calories: 105}, 
        {id: 3, name: "starfruit",     calories: 28}, 
        {id: 4, name: "tamarind",      calories: 5}, 
        {id: 5, name: "papaya",        calories: 119}, 
        {id: 6, name: "pineapple",     calories: 450}, 
        {id: 7, name: "coconut",       calories: 1400}, 
        {id: 8, name: "passionfruit",  calories: 29}, 
        {id: 9, name: "níspero",       calories: 8}
    ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
    fruits.sort((a, b) => a.calories - b.calories); // caloric
    // fruits.sort((a, b) => b.calories.localeCompare(a.calories)); // reverse caloric

    const listFruits = fruits.map(fruit => <li key={fruit.id}>{fruit.name} : {fruit.calories}</li>);

        return (<ol>{listFruits}</ol>);
};

export default List;