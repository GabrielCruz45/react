// te quedaste en
import List from './List.jsx';

function App() {
    const fruits = [
        {id: 1,     name: "pear",           calories: 102}, 
        {id: 2,     name: "banana",         calories: 105}, 
        {id: 3,     name: "starfruit",      calories: 28}, 
        {id: 4,     name: "tamarind",       calories: 5}, 
        {id: 5,     name: "papaya",         calories: 119}, 
        {id: 6,     name: "pineapple",      calories: 450}, 
        {id: 7,     name: "coconut",        calories: 1400}, 
        {id: 8,     name: "passionfruit",   calories: 29}, 
        {id: 9,     name: "níspero",        calories: 8}
    ];

    const vegetables = [
        {id: 10,    name: "potatoes",      calories: 110}, 
        {id: 11,    name: "celery",        calories: 15}, 
        {id: 12,    name: "carrots",       calories: 25}, 
        {id: 13,    name: "corn",          calories: 63}, 
        {id: 14,    name: "broccoli",      calories: 50}, 
    ];

    const emptyList = [];
    
    const listFruits = <List items={fruits} category="Fruits"/>;
    const listVegetables = <List items={vegetables} category="Vegetables"/>;
    
    return(
        <>
            {fruits.length > 0 ? listFruits : null}
            {vegetables.length > 0 && listVegetables} 
            {/* this is an equivalent expression to the ternary with else null above; 
            this is called short circuiting */}
            {emptyList.length > 0 ? listFruits : <p>This list is empty.</p>}
        </>
    );
};

export default App;
