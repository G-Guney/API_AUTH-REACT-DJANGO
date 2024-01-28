import { useState, useEffect } from 'react';
import './App.css';
import './bootstrap.min.css'
import Login from './pages/Login';
import Nav from './components/Nav';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Register from './pages/Register';

function App() {
  const [name, setName] = useState('')
  useEffect(  ()=> {
      (
          async () =>{
              const response = await fetch('http://localhost:8000/api/user', {
                  headers: { 'Content-Type' : 'application/Json'},
                  credentials : 'include',
              })

              const content = await response.json()
              setName(content.name)
          }
      )()
  },[])

  return (
    <>
    <BrowserRouter>
      <Nav name = {name} setName = {setName}/>
      <main className="form-signin w-100 m-auto">
          <Routes>
            <Route path='/' exact Component={()=> <Home name = {name} />}/>
            <Route path='login/' Component={()=> <Login setName={setName}/>}/>
            <Route path='register/' Component={Register}/>
          </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}

export default App
