import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin, setUser } from 'state/auth'
import { useGetUser } from 'state/auth/hooks'
import './Header.scss'

const Header = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const user = useGetUser()
  const onLogin = () => {
    dispatch(userLogin({ username, password }))
  }
  const onLogout = () => {
    dispatch(setUser(null))
  }
  return (
    <header className="App-header">
      <h1 className="App-logo">Funny Movies</h1>
      <div className="App-navigation">
        {user ? (
          <>
            <div>
              Welcome <span className="App-username">{user.username}</span>
            </div>
            <button
              className="App-button-danger"
              onClick={onLogout}
            >Logout</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Username"
              className="App-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Username"
              className="App-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="App-button"
              onClick={onLogin}
            >Login / Register</button>
          </>
        )}
        
      </div>
    </header>
  )
}

export default Header