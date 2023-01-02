import React,{useState} from 'react'
// import './Style.css'
function ControlledForm() {
    const [name,setName]=useState("");
    const [fullName,setFullName]=useState();
    const inputEvent=(event)=>{
        // console.log(event.target.value);
        setName(event.target.value);
    }
    const onSubmit=()=>{
        setFullName(name);
    }
  return (
<>
<h1>Welcome { fullName}</h1>
<input type="text" placeholder='Enter Your Name' 
onChange={inputEvent}
value={name}
/>
<br />
<button onClick={onSubmit}>Click Me  </button>
</>
  )
}

export default ControlledForm