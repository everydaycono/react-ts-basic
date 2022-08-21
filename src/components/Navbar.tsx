import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h3>React-ts-core</h3>

        <div>
            <Link to="/">Home</Link>
            <Link to="/tour">Tours</Link>
            <Link to="/menu">Menu</Link>
        </div>
    </nav>
  )
}

export default Navbar