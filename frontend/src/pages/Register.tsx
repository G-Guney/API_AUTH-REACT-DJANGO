import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e : SyntheticEvent) => {
        e.preventDefault()
        await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/Json'},
            body : JSON.stringify({
                name,
                email,
                password
            })
        });
        navigate('/login')
    }

    return (
    <>
    <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Register</h1>
        <div className="form-floating">
            <input type="text" className="form-control" id="floatingName" placeholder="Your Name" required onChange={e => setName(e.target.value)}/>
            <label htmlFor="floatingName">Name</label>
        </div>
        <div className="form-floating">
            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="floatingEmail">Email address</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>
            <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
    </form>
</>
  )
}

export default Register