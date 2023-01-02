import React, { useRef,useState } from 'react'

function UncontrolledForm() {
const [name,setName]=useState('');
const input=useRef(null);

const handleClick=(e)=>{
    e.preventDefault();
     setName(input.current.value);
}
  return (
    <div>
        <form >
        <input type="text" ref={input}/>
        <br />
        <button onClick={handleClick}>Submt</button>
        </form>
        <div>
           <p>
           {name}
            </p> 
        </div>
    </div>
  )
}

export default UncontrolledForm