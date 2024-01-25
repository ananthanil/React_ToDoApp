import React, { useState } from 'react';
import Tbutton from '../component/Tbutton';
import Ttext from '../component/Ttext';
import Ttextarea from '../component/Ttextarea';

function Homepage(props) {

    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    return (
        <div>
            <h1>hello</h1>
            <label htmlFor="Title">Title</label>
            <Ttext
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            >
            </Ttext>
            <label htmlFor="content">content</label>
            <Ttextarea
            rows="4"
            cols="50"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            >
            </Ttextarea>
            <Tbutton
            label={"Add"}
            ></Tbutton>

        </div>
    );
}

export default Homepage;