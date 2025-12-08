# DEVLOG

Sunday December 7, 2025
    There are three main ways to style a React application (without using an external framework; e.g. Tailwind CSS, etc.)
        1. External
        2. Module
        3. Inline

    External -> using a "standard" .css file
    
    Module -> creating and importing a module containing the stylesheets.
        Create a component folder. In it include Component.jsx and Component.module.css.

        Import Component.module.css to Component.jsx (which later is imported to App.jsx) as
        ```import styles from './Button.module.css';```

        Finally, write as a className "{styles.className}" ```<button className={styles.button}>```

    Inline -> write the style within the Component.jsx file using a styles constant, like so:
        
        function Component(){
                const styles = {
                camelCaseProperty : "string",
                ...
            };

            return(
                <element style={styles}>Click me!</element>
            );
        };
