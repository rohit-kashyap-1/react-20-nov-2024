import React from 'react'
import './Contact.css'
import Login from './Login'
import Dashboard from './Dashboard'
export default function Home() {

    document.title = 'Homepage'

  const login = false
  const user = 'Rohit sharma'
  return (
    <div className='contact'>
        <h1>Homepage</h1>
        {(login===true)?<Dashboard />:<Login />}
    </div>
  )
}
