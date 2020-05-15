import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  const links = [
    {
      href: '/',
      linkText: 'Home'
    }
  ]
  return (
    <>
      <ul>
        {links.map(({ href, linkText }) => (
          <li key={`href-${href}`}>
            <Link to={href}>
              {linkText}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navigation