import React from 'react';

function Ttext(props) {
    const {type,value,onChange}=props
    return (
        <div>
            <input
            type={type}
            value={value}
            onChange={onChange}
            ></input>
        </div>
    );
}

export default Ttext;