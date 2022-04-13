import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{
    // const s1 = {"name": "Pratiksha20",  "class": "2b" } const [state, setstate] = useState(s1);
     const update =() =>{
        //  setTimeout(() => {setstate({"name": "subhankar","class": "5b"})},1000);
     }
    return (
        // <NoteContext.Provider value={{state:state , update:update}}>
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 