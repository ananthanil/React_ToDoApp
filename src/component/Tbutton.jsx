import React from 'react';

function Tbutton(props) {
    const[label]=props
    return (
        <div>
            <button
            
            >{label}</button>
        </div>
    );
}

export default Tbutton;