import React, {useContext, useEffect, useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { StateContext } from "./stateContext"
import ClientBase from "./ClientBase"

export default function ViewClients(){
    const navigate = useNavigate()
    const{getClients, setGetClinets, getAllClients, viewAllClients} =useContext(StateContext)
    const [client, setClient] = useState([])
    // function getClients(){
    //     axios.get('./clients')
    //     .then(res => setClient(res.data))
    //     .catch(err => console.log(err))
    // }
    const clientComp = getClients.map(client => <ClientBase key={client.firstName} id={client._id} firstName={client.firstName} lastName={client.lastName} contact={client.contact}/>)
    useEffect(()=> {
        getAllClients()
    }, [client.length])

    function navHome(){
        navigate('/home')
    }
    
    return(
        <div>
            <button id="navigateBtn" onClick={navHome}>HOME</button>
            <h1 className="headline">Clients</h1>
            {clientComp}
            
        </div>
    )
}