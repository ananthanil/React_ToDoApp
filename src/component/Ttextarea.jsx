import React from 'react';

function Ttextarea(props) {
    const {rows, cols, value, onChange} = props
    return (
        <div>
            <textarea
            value={value}
            onChange={onChange}
            rows={rows}
            cols={cols}
            ></textarea>
        </div>
    );
}

export default Ttextarea;