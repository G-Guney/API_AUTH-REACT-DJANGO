import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props : {name : string, setName : (name : string) => void}) {
  const logout = async () => {
    await fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/Json'},
      credentials : 'include',
  })
  props.setName('')
  }

  
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Home</Link>
      <div>
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          {props.name ? 
          <li className="nav-item">
            <Link className="nav-link active" to="/login" onClick={logout}>Logout</Link>
          </li>
          :
          <>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/register">Register</Link>
            </li>
          </>
        }
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav