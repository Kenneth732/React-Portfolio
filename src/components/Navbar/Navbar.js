import { Link } from 'react-scroll';
import logo from '../assets/logo.png'
// import Link from 'react-scroll'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <img src={logo} className='logo' alt='logo' />
        <div className='desktopMenu'>
          <Link
            className='desktopMenuListItem'
            to='home'
            smooth={true}
            duration={500} >
            Home
          </Link>
          <Link
            className='desktopMenuListItem'
            to='client'
            smooth={true}
            duration={500} >
            Client
          </Link>
          <Link
            className='desktopMenuListItem'
            to='about'
            smooth={true}
            duration={500} >
            About
          </Link>
          <Link
            className='desktopMenuListItem'
            to='portfolio'
            smooth={true}
            duration={500} >
            Portfolio
          </Link>
          {/* Other links */}
        </div>
        <button className='' type='submit'>
          <img src='' className='desktopMenuImg' alt='btn' /> Contact Me
        </button>
      </nav>
    </div>
  );
}
