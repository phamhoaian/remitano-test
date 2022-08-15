import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-logo">Funny Movies</h1>
      <div className="App-navigation">
        <input type="text" placeholder="Username" className="App-input" />
        <input type="text" placeholder="Password" className="App-input" />
        <button className="App-button">Login / Register</button>
      </div>
    </header>
  )
}

export default Header