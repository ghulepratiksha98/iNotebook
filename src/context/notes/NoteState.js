import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{
    const notesIntial = [
        {
          "_id": "6254f08b03edd0763fe9412e",
          "user": "625407180a28792ef2e1a975",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-04-12T03:22:51.709Z",
          "__v": 0
        },
        {
          "_id": "6254f08c03edd0763fe94130",
          "user": "625407180a28792ef2e1a975",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-04-12T03:22:52.017Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesIntial);
      const update =() =>{
       
     }
    return (
       
        <NoteContext.Provider value={{notesIntial,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 