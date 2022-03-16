import React, { useState } from "react";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [allNote, setallNote] = useState([
    {
      id: 0,
      name: "This is sample note , Delete this note and add your notes here !",
      title: "Sample title !"
    }
  ]);

  const titleChange = (e) => {
    setTitle(e.target.value);
    // console.log(title)
  };
  const noteChange = (e) => {
    setNote(e.target.value);

    // console.log(note)
  };
  const saveNote = (e) => {
    e.preventDefault();
    if (note === "" && title === "") {
      return;
    } else {
      setallNote([
        ...allNote,
        {
          id: title + allNote.length,
          title: title,
          name: note
        }
      ]);
    }
    // alert("Task Added!!")
    // console.log(allNote)
  };
  const deleteNote = (id) => {
    // setallNote((note) => note.id !== id)
    setallNote(allNote.filter((note) => note.id !== id));
    // console.log(id)
  };
  return (
    <div>
      <form onSubmit={saveNote}>
        <div className="textarea">
          <input
            placeholder="Title"
            className="title"
            onChange={titleChange}
          ></input>
          <textarea placeholder="Add a note" rows={5} onChange={noteChange} />
          {/* <br /><br /><br /> */}
          <button className="add-btn" onClick={saveNote}>
            ADD
          </button>
        </div>
      </form>
      <br></br>

      <span className="notes-count">You have {allNote.length} Notes.</span>
      <div className="show-notes">
        {allNote.map((note) => (
          <div key={note.id} className="showAllnotes">
            <h3 className="note-title">{note.title}</h3>
            <p className="note-note">{note.name}</p>

            <button className="del-btn" onClick={(id) => deleteNote(note.id)}>
              DEL
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
