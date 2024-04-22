import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
<nav>
    <ul>
        <li>
        <Link href="/" aria-label="Homepage">
        </Link>
        </li>
    </ul>
</nav>
  )
}

export default Nav