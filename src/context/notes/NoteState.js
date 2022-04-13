import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{
    const notesIntial = [
        {
          "_id": "6254f08b03edd40763fe9412e",
          "user": "625407180a28792ef2e1a975",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-04-12T03:22:51.709Z",
          "__v": 0
        },
        {
          "_id": "6254f08c033ed44d0763fe94130",
          "user": "625407180a28792ef2e1a975",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-04-12T03:22:52.017Z",
          "__v": 0
        }
        ,
        {
          "_id": "6254f208c03edd0763fe94130",
          "user": "625407180a28792ef2e1a975",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-04-12T03:22:52.017Z",
          "__v": 0
        },
        {
          "_id": "6254f08c032edd0763fe94130",
          "user": "625407180a28792ef2e1a975",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-04-12T03:22:52.017Z",
          "__v": 0
        },
        {
          "_id": "6254f08c03e4dd0763fe94130",
          "user": "625407180a28792ef2e1a975",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-04-12T03:22:52.017Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesIntial);
      //Add Note
      const addNote =(title, description, tag) =>{
        //todo api call
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
      //Delet Note
      const deleteNote =() =>{
       
      }
      //Edit Note
      const editNote =() =>{
       
     }
    return (
       
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 