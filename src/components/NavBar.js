import React,{useState}from 'react';
import './NavBar.css'; 
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick =()=> setClick(!click);
  return (
    <div className='header'>
        <Link to="/">
            <h1>Ankul Kashyap</h1>
        </Link>
        <ul className={click ? "nav_menu active" : "nav_menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color:"#fff"}}/>) : <FaBars size={20} style={{ color:"#fff"}}/>}
            
            
        </div>
    </div>
  )
}

export default NavBar