import React from 'react';

function Cell({ value, onClick, className }) {


    return (
        <div className={`cell ${className}`} onClick={onClick}>
            {value}
        </div>
    );
}

export default Cell;