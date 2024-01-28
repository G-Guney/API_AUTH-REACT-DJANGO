import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props : {name : string ,setName : (name : string) => void}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submit = async (e : SyntheticEvent) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/Json'},
            credentials : 'include',
            body : JSON.stringify({
                email,
                password
            }),
        })

        const content = await response.json();
        props.setName(content.name);
        navigate('/')
        window.location.reload();
    }
  return (
    <>
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Login</h1>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
        </form>
    </>
  )
}

export default Login