import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'





export default function Login() {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({ userName: "", password: "" })
    const [color, setColor]= useState("aqua")

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInput => ({ ...prevInput, [name]: value }))
        setColor("aqua")
    }
    function handleSubmit(e) {

        e.preventDefault()
        const correctUser = 'admin'
        const correctPass = 'pass'
        if (inputs.userName === correctUser && inputs.password === correctPass) {

            setInputs({ userName: "", password: "" })
            navigate('/home')
        } else {
            setInputs({ userName: "", password: "" })
            setColor("red")

        }
    }
    return (

        <div>
            <h1 className='headline'>Client Management System</h1>
            <form onSubmit={handleSubmit}>
                <input style={{backgroundColor: color}} className='loginInput' type="text" name="userName" value={inputs.userName}
                    onChange={handleChange} placeholder="Username" /><br />
                <input style={{backgroundColor: color}} className='loginInput' type="password" name="password" value={inputs.password}
                    onChange={handleChange} placeholder="Password" /><br />
                <button className='submitBtn'>SUBMIT</button>
            </form>=

        </div>
    )
}