import React from 'react';

function TodoHeader({ children, loading }) {
    return (
        <header>
        {
            React.Children.toArray(children)        //*send this props all elements
            .map(child => React.cloneElement(child, { loading }))
        }
        </header>
    );
}

export { TodoHeader };