import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{
  const host = "http://localhost:5000"
    const notesIntial = []
      const [notes, setNotes] = useState(notesIntial);
     //Get all Note
     const getNotes = async () =>{
      //todo api call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1NDA3MTgwYTI4NzkyZWYyZTFhOTc1In0sImlhdCI6MTY0OTcyOTIwOX0.oCkir2YdS3ZPi7bK-HxX_HAvpVA1TlrT3nEEYYTgM7U" },
      
      });
      const json = await response.json()
      console.log(json)
      setNotes(json)
    }
      //Add Note
      const addNote = async (title, description, tag) =>{
        //todo api call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1NDA3MTgwYTI4NzkyZWYyZTFhOTc1In0sImlhdCI6MTY0OTcyOTIwOX0.oCkir2YdS3ZPi7bK-HxX_HAvpVA1TlrT3nEEYYTgM7U" },
          body: JSON.stringify({title, description, tag})
        });
       const json = await response.json();
       console.log(json)

        console.log("Adding anew note");
        const note =  {
          "_id": "6254f08c03e4WWFFdd0763fe94130",
          "user": "625407ADCS180a28792ef2e1a975",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-04-12T03:22:52.017Z",
          "__v": 0
        };
       setNotes(notes.concat(note))
      }
      //Delete  Note
      const deleteNote =  async(id) =>{
         //todo api call
         const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1NDA3MTgwYTI4NzkyZWYyZTFhOTc1In0sImlhdCI6MTY0OTcyOTIwOX0.oCkir2YdS3ZPi7bK-HxX_HAvpVA1TlrT3nEEYYTgM7U" },
          
        });
        const json =  await response.json();
        console.log(json)




        console.log("deleteing the note with id" + id);
        const newNotes = notes.filter((note)=>{ return note._id!==id})
        setNotes(newNotes)
      }
      //Edit Note
      const editNote =async(id, title, description, tag) =>{
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1NDA3MTgwYTI4NzkyZWYyZTFhOTc1In0sImlhdCI6MTY0OTcyOTIwOX0.oCkir2YdS3ZPi7bK-HxX_HAvpVA1TlrT3nEEYYTgM7U" },
          body: JSON.stringify({title, description, tag})
        });
        const json = response.json();
        let newNotes = JSON.parse(JSON.stringify(notes))
        //Logic to edit in client
       for (let index = 0; index < notes.length; index++) {
         const element = newNotes[index];
         if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
         
       }
       setNotes(newNotes);
     }
    return (
       
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 