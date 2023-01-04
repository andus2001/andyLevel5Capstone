import React, {useState} from 'react'
import axios from 'axios'

const StateContext = React.createContext()
function StateContextProvider(props){
    const [getClients, setGetClinets] = useState([])

    function getAllClients(){
        axios.get('./clients')
        .then(res => setGetClinets(res.data))
        .catch(err => console.log(err))
    }
    function viewAllClients(){
        console.log(getClients)
    }

    return(

        <StateContext.Provider
            value={{
                getClients,
                setGetClinets,
                getAllClients,
                viewAllClients
            }}
        >
            {props.children}
        </StateContext.Provider>
    )
}

export { StateContextProvider, StateContext}