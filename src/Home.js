import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    function addNewClient(e){
        e.preventDefault()
        navigate('/newClient')
    }
    function viewClients(e){
        e.preventDefault() 
        navigate('/viewClients')
    }


    return (

        <div>

            <h1 className='headline'>Client Management System</h1>
            <button onClick={addNewClient} className="navBtn">Add New Client</button><br/>
            <button onClick={viewClients} className="navBtn">View Clients</button>
        </div>
    )
}