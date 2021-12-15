import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Get all users</Link>
                </li>
                <li>
                    <Link to="/create">Create user</Link>
                </li>

            </ul>
        </nav>
    )
}
