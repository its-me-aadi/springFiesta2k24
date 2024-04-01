import React from 'react'
import '../styles/navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    return (
        <div className='nav-main'>
            <ul className="nav-ul">
                <li className="nav-li">
                    <Link to='/'>Home</Link>
                    {location.pathname === '/' && <div className="border-cross"></div>}
                </li>
                <li className="nav-li">
                    <Link to='/events'>Event Schedule</Link>
                    {location.pathname === '/events' && <div className="border-cross"></div>}
                </li>
                <li className="nav-li">
                    <Link to='/core'>Core Members</Link>
                    {location.pathname === '/core' && <div className="border-cross"></div>}
                </li>
                <li className="nav-li">
                    <Link to='/voting'>Voting Page</Link>
                    {location.pathname === '/voting' && <div className="border-cross"></div>}
                </li>
            </ul>
        </div>
    )
}

export default Navbar
