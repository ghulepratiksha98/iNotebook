import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import AddNote from './AddNote';
import Noteitem from './Noteitem';



const Notes = () => {
    const context = useContext(noteContext);
    const { notes, addNote} = context;
    return (
        <>
        <AddNote/>
        <div className="row my-3">
            <h2>You Notes</h2>
            {/* console.log(note);  */}
            {notes.map((note)=>{
        // return note.title
        return <Noteitem key={note._id} note={note}/>
      })}
            </div>
            </>
    )
}

export default Notes