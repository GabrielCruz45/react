# REACT DEVLOG

Sunday December 7, 2025

    Session 1 (styling setup):

    There are three main ways to style a React application (without using an external framework; e.g. Tailwind CSS, etc.)
        1. External -> great for global styles and/of small projects
        2. Module -> preferred for individual components with unique stylings
        3. Inline -> best for small components with minimal styling

    External -> using a "standard" .css file
    
    Module -> creating and importing a module containing the stylesheets.
        Create a component folder. In it include Component.jsx and Component.module.css.

        Import Component.module.css to Component.jsx (which later is imported to App.jsx) as
        ```import styles from './Button.module.css';```

        Finally, write as a className "{styles.className}" ```<button className={styles.button}>```

    Inline -> write the style within the Component.jsx file using a styles constant, like so:
    ``` 
        function Component(){
                const styles = {
                camelCaseProperty : "string",
                ...
            };

            return(
                <element style={styles}>Click me!</element>
            );
        };
    ```


    Session 2 (props):

    Need to check how to properly use defaultprops, following tutorial's orders doesn't produced the desired result.
    I did have to download the props package.


    Session 3 (conditional rendering):

    Learned a cool trick for conciseness with ternary operators in JavaScript for conditional rendering:

    ```
        const variable_one = <HTML><HTML/>
        const variable_two = <HTML><HTML/>

        return(condition ? variable_one : variable_two);
    ```

    *Still need to revist the defaultProps problem*

Tuesday December 9, 2025
    Click events
