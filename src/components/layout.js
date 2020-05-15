import React from 'react'
import Navigation from './navigation'
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
