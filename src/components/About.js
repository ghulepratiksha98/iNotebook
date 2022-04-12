
import React , { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const  About = () =>{
  const a = useContext(noteContext)
  //hook useEffect used as componentdidmount 
  useEffect(() => {
    a.update();
    //eslint-disable-next-line
  },[])
  return (
    <div>This is about {a.state.name} and she is in class {a.state.class}</div>
  )
}

export default About
