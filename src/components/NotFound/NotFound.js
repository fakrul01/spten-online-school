import React from 'react';

const NotFound = () => {
    const style = {
        color: "red"
    }
    return (
        <div>
            <h2>Page not found!</h2>
            <p>Don't ask me about this page.</p>
            <h1><small style={style}>404</small></h1>
        </div>
    );
};

export default NotFound;