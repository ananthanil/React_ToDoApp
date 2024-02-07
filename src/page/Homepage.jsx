import React, { useState } from 'react';
import '../App.css'
import Tbutton from '../component/Tbutton';
import Ttext from '../component/Ttext';
import Ttextarea from '../component/Ttextarea';

function Homepage(props) {

    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [toDoList,setToDoList]=useState([])
    const [editClikedIndex,setEditClikedIndex]=useState()

    const validate = () => {
        let flag= true;
        if(title==""){
            alert("Title is required")
            flag = false
        }
        if(content == ""){
            alert("Content is required")
            flag= false;
        }
        return flag
    }

    const onSave = ()=>{
        if(validate()){
            if(editClikedIndex==null){
                setToDoList([...toDoList,{
                    title:title,
                    content:content,
                }])
            }else{
                toDoList[editClikedIndex].title=title
                toDoList[editClikedIndex].content=content
            }
       
            resetField()
        }
    }

    const resetField=()=>{
        setTitle("")
        setContent("")
    }

    const onEdit=(index)=>{
        setEditClikedIndex(index)
        toDoList.forEach((element,i)=>{
            if(index==i){
                setTitle(element.title)
                setContent(element.content)
            }
            
        })   
    }

    const onDelete=(index)=>{
        toDoList.splice(index,1)
        setToDoList([...toDoList])

    }

    return (
        <div className='test'>
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
            onClick={onSave}
            label={"Add"}
            />
        

            <h2>To Do list</h2>
            <table>
                <thead>
                    <th style={{paddingLeft:"20px"}}>Sl No</th>
                    <th style={{paddingLeft:"20px"}}>Title</th>
                    <th style={{paddingLeft:"20px"}}>Content</th>
                    <th style={{paddingLeft:"20px"}}>Action</th>
                </thead>
                <tbody>
                    {toDoList.map((element,index)=>
                    element && (<tr>
                        <td style={{paddingLeft:"20px"}}>{index}</td>
                        <td style={{paddingLeft:"20px"}}>{element.title}</td>
                        <td style={{paddingLeft:"20px"}}>{element.content}</td>
                        <td style={{paddingLeft:"20px"}}>   
                            <Tbutton
                            onClick={()=>{onEdit(index)}}
                        label={"Edit"}
                             ></Tbutton>
                        </td>
                        <td style={{paddingLeft:"10px"}}>
                        <Tbutton
                            onClick={()=>{onDelete(index)}}
                           label={"Delete"}
                             ></Tbutton>
                        </td>
                    </tr>)
                    )}
                </tbody>
            </table>

        </div>
    );
}

export default Homepage;