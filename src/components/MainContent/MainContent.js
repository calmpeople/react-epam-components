import React from "react";
import './styles.css';

function MainContent(props) {
    return (
        <main>
            {props.children}
        </main>
    )
}

export default MainContent;