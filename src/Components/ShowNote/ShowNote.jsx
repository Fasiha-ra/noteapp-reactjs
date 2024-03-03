import React from "react";
import Button from "../Button/Button";
import { ShowNotesStyles } from "./ShowNote.styles";

const ShowNote = (props) => {
  const Delete = () =>{
    props.deleteItem(props.id);
  }
  return (
    <>
      <ShowNotesStyles>
        <div className="container">
          <div className="note">
            <div className="notes">
              <h1>{props.title}</h1>
              <p>{props.content}</p>
              <div onClick={Delete}><Button name={"-"} /></div>
            </div>
          </div>
        </div>
        {/* <div className="note">
   <h1>Title</h1>
   <p>Content</p>
   <Button name={"-"} />
   </div> */}
      </ShowNotesStyles>
    </>
  );
};

export default ShowNote;
