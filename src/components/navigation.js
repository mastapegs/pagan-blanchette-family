import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

const Navigation = () => {
  const links = [
    {
      href: '/',
      linkText: 'Home'
    },
    {
      href: '/blog',
      linkText: 'Blog'
    },
    {
      href: '/gallery',
      linkText: 'Gallery'
    }
  ]
  return (
    <>
      <ul className={styles.nav}>
        {links.map(({ href, linkText }) => (
          <li className={styles.navItems} key={`href-${href}`}>
            <Link className={styles.navLinks} to={href}>
              {linkText}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navigation