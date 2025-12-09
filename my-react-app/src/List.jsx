import PropTypes from 'prop-types';

function List(props) {
    const styles = {
        color : "dodgerblue",
    };
    const styles_two = {
        color: "tomato",
    };

    const itemList = props.items;
    const category = props.category;


    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // caloric
    // fruits.sort((a, b) => b.calories.localeCompare(a.calories)); // reverse caloric

    // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
    // const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

    const listItems = itemList.map(fruit =>   <li key={fruit.id}>
                                                <span style={styles}>
                                                    {fruit.name}
                                                </span>
                                                 : {fruit.calories}
                                            </li>
    );
    // const listItems = highCalFruits.map(fruit => <li key={fruit.id}><span style={styles}>{fruit.name}</span> : {fruit.calories}</li>);


    return (
        <>
            <h3 className="list-category" style={styles_two}>{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
};

List.propTypess = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number, 
            name: PropTypes.string, 
            calories: PropTypes.number
    }))
};

List.defaultProps = {
    category: "Category",
    items: [],
};

export default List;