import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar({ setIsCartOpen }){
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return(
        <div className='full-header'>
            <header>
                <p> Desi Destination </p>
                <nav>
                <button className="menu-icon" onClick={toggleMenu}> &#9776; </button>
                <ul className={showMenu ? "navi show" : "navi"}>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/menu"> Menu </Link></li>
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <Link to="/contact"> Contact Us </Link> </li>
                </ul>
            </nav>
            </header>
        </div>
    )
}

export default Navbar