import React, { useState } from 'react'

const Mode = (props) => {
    const[mode,setMode]=useState("Light")
    const[color,setColor]=useState("bg-blue-600 text-white")
    function Switch(){
        console.log(mode)
        if (mode=="Light"){
        setMode("Dark")
        setColor("bg-black text-white")}
        else{
            setMode("Light")
            setColor("bg-blue-600 text-white")
        }}

  return (
    <button onClick={Switch} className={`py-2 px-4 rounded-full ${color} active:scale-90`}>
        {mode}
    </button>
  )}

export default Mode
