import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { StateContext } from './stateContext'

export default function NewClient(){
    const {getClients, setGetClinets, getAllClients, viewAllClients} = useContext(StateContext)
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        getAllClients()
    })
    const [client, setClient] = useState({firstName:"", lastName:"", contact:''})
    function submitClient(e){
        e.preventDefault()
        // alert(`first: ${client.firstName} last: ${client.lastName} contact: ${client.contact}`)
        axios.post('./clients', {
            firstName: client.firstName,
            lastName: client.lastName,
            contact: client.contact
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        setClient({firstName:"", lastName:"", contact:''})
        alert(`${client.firstName} was added to the database`)
    }
    
    
    function handleChange(e){        
        const { name, value } = e.target
        setClient(prevInput => ({ ...prevInput, [name]: value }))
    }
    function goHome(){
        navigate('/home')
    }
    return(
        <div >
            <button id='navigateBtn' onClick={goHome}>HOME</button>
            <h2 className='subHeading'>Client Information</h2>
            <form id='newClientForm' onSubmit={submitClient}>
                <input className='inputFields' type="text" name="firstName" value={client.firstName} onChange={handleChange} placeholder="first name" /><br/>
                <input className='inputFields' type="text" name="lastName" value={client.lastName} onChange={handleChange} placeholder="last name" /><br/>
                <input className='inputFields' type="text" name="contact" value={client.contact} onChange={handleChange} placeholder="contact" /><br/>
                
                <button className='submitBtn'>Submit</button>
            </form> 
        </div>
    )
}