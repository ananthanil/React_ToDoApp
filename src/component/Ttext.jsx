import React from 'react';

function Ttext(props) {
    const [type]=props
    return (
        <div>
            <input
            type={type}
            ></input>
        </div>
    );
}

export default Ttext;