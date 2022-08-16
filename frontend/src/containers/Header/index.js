import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin, setUser } from 'state/auth'
import { useGetUser } from 'state/auth/hooks'
import { Link } from 'react-router-dom'
import { Paths } from 'routes'
import { BrowserView, MobileView } from 'react-device-detect'
import './Header.scss'

const Header = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isShowMobileMenu, setShowMobileMenu] = useState(false)
  const user = useGetUser()
  const onLogin = () => {
    dispatch(userLogin({ username, password }))
    setShowMobileMenu(false)
  }
  const onLogout = () => {
    dispatch(setUser(null))
    setShowMobileMenu(false)
  }
  const toggleMenuMobile = () => {
    setShowMobileMenu(!isShowMobileMenu)
  }
  const renderBrowserView = (
    <div className="App-navigation">
      {user ? (
        <>
          <div>
            Welcome <span className="App-username">{user.username}</span>
          </div>
          <Link to={Paths.ShareMovie}>
            <button
              className="App-button"
            >Share a movie</button>
          </Link>
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
  )
  const renderMobileView = (
    <div className='App-navigation-mobile'>
      {user && <div>
        Welcome <span className="App-username">{user.username}</span>
      </div>}
      <label className="App-menu-mobile-container" onClick={toggleMenuMobile}>
        <div className={"App-menu-mobile-button" + (isShowMobileMenu ? " open" : "")} />
      </label>
      {isShowMobileMenu && <div className="App-menu-mobile">
        {user ? (
          <>
            <Link to={Paths.ShareMovie}>
              <button
                className="App-button"
              >Share a movie</button>
            </Link>
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
      </div>}
    </div>
  )
  return (
    <header className="App-header">
      <Link to={Paths.Home} className="App-logo">
        <h1>Funny Movies</h1>
      </Link>
      <BrowserView>{renderBrowserView}</BrowserView>
      <MobileView>{renderMobileView}</MobileView>
    </header>
  )
}

export default Header