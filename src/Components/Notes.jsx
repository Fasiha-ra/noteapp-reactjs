import React, { useState } from "react";
import Header from "./Header/Header";
import CreateNotes from "./createNote/CreateNotes";
import Footer from "./Footer/Footer";
import ShowNote from "./ShowNote/ShowNote";

const Notes = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (showData) => {
    // alert("clicked");
    setAddItem((prevData) => {
      return [...prevData, showData];
    });
  };
  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((val, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CreateNotes passNotes={addNote} />
      {addItem.map((val, ind) => {
        return (
          <ShowNote
            key={ind}
            id={ind}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default Notes;
