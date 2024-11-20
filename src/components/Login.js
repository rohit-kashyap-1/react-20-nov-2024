import React from 'react'

export default function Login() {
  return (
    <div>
      <h3>User Login </h3>
      <form>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  )
}
