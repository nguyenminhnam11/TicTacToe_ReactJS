import React, { useState } from 'react';
import './Toggle.css'

function Toggle(props) {
    const [on, setOn] = useState(false);
    const handleClick = () => {
        setOn((on) => !on)
    }
    return (
        <div className={`toggle ${on ? 'active' : ''}`} onClick={handleClick}>
            <div className={`spinner ${on ? 'active' : ''}`}></div>
        </div>
    );
}

export default Toggle;