import React, { useState } from 'react';
import Button from '../Button/Button';
import {Notes} from '../createNote/CreateNotes.styles'


const CreateNotes = (props) => {
  const [showData, setShowData]=useState({
    title: "",
    content: "",
  });
  const changeHandler = (event)=>{
const {name, value}=event.target;
    setShowData((prevData)=>{
      return{
        ...prevData,
        [name]:value
      }
      
    })
  }
  const clickHandler = (e) =>{
    e.preventDefault();
    props.passNotes(showData);
    setShowData({
      title:"",
      content:"",
    })
  }
  return (
    <>
    <Notes>
        <form>
            <input type="text" placeholder='Title' name="title" value={showData.title} onChange={changeHandler} />
            <textarea placeholder='Add note here...' name="content" value={showData.content} onChange={changeHandler}></textarea>
           <div onClick={clickHandler}><Button name={"+"}  className="btn"/></div>
        </form>
    </Notes>
    </>
  )
}

export default CreateNotes