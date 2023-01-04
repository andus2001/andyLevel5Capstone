import React, {useState} from "react"

import axios from "axios"
 
export default function ClientBase(props){
    
    const [visibility, setVisibility] = useState("hidden")
    
    
    const [client, setClient] = useState({firstName:"", lastName:"", contact:''})
    function deleteContact(){
        axios.delete(`./clients/${props.id}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.msg))

        window.location.reload()
    }
    function handleChange(e){        
        const { name, value } = e.target
        setClient(prevInput => ({ ...prevInput, [name]: value }))
    }
    function editVisibility(){
        if(visibility === "hidden"){
            setVisibility(prevVis => "visible")
            
        }else{
            setVisibility(prevVis => "hidden")
        }
    }
    function submitForm(e){
        e.preventDefault()
        
        axios.put(`./clients/${props.id}` , {firstName:client.firstName, lastName:client.lastName, contact:client.contact})
        .then(res => console.log(res.data))
        window.location.reload()
        .catch(err => console.log(err.msg))
        
    }

    
    return(
        <div>
            
            <div className="clientContainer">
            First Name: {props.firstName} <br/>
            Last Name: {props.lastName}<br/>
            Number: {props.contact} 
            
            <div className="buttonContainer">
            <button id="editBtn" onClick={editVisibility}>Edit</button>
            <button id="deleteBtn" onClick={deleteContact}>Delete</button>
            </div>
            <form className="editForm" onSubmit={submitForm} 
             style={{ visibility: visibility}}>
                <input  className='inputFields' type="text" name="firstName" value={client.firstName} onChange={handleChange} placeholder={props.firstName} /><br/>
                <input className='inputFields' type="text" name="lastName" value={client.lastName} onChange={handleChange} placeholder={props.lastName} /><br/>
                <input className='inputFields' type="text" name="contact" value={client.contact} onChange={handleChange} placeholder={props.contact} /><br/>
                
                <button className='submitBtn'>Submit</button> 


            </form>
            </div>
        </div>
    )
}