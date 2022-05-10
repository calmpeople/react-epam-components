import React from "react";

function ErrorBoundary(props) {
    const ErrorText = () => (
        <h2>
            Something wrong...
        </h2>
    )

    let isEverythingOK = true;

    return (
        <>{isEverythingOK ? props.children : <ErrorText />}</>
    )
}

export default ErrorBoundary;