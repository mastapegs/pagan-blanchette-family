import React from 'react'
import Navigation from './Navigation'
import Wrapper from './wrapper'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  )
}

export default Layout
