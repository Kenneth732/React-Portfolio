import React from 'react'
import Logo from '../../assets/logo.png'
import Link from 'react-scroll'

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <img src={Logo} className='logo' />
        <div className='desktopMenu'>
          <Link classNamedesktopMenuListItem></Link>
        </div>
        <button className='' type='submit'>
          <img src='' className='desktopMenuImg' /> Contact Me
        </button>
      </nav>
    </div>
  )
}

export default Navbar