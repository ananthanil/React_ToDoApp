import React from 'react';

function Tbutton(props) {
    const{label,onClick}=props
    return (
        <div>
            <button
            onClick={onClick}
            >{label}</button>
        </div>
    );
}

export default Tbutton;