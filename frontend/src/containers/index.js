import React from 'react'
import Header from './Header'

const BaseContainer = ({ children }) => {
  return (
    <div className="App-container">
      <Header />
      {children}
    </div>
  )
}

export default BaseContainer