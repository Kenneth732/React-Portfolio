import React from 'react'
import bg from '../assets/kent-removebg.png'
import { Link } from 'react-scroll'
import btn from '../assets/hireme.png'
import './Intro.css'

export default function Intro() {
  return (
    <div id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <br></br>
            <span className='introText'>
                I'M <br></br>
                <span className='introName'>
                  Kent <br></br>
                </span> 
                Web Developer
            </span>
            <p className='introPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit, diam eu vestibulum porttitor, elit orci viverra arcu, ut pretium leo turpis at enim. In non magna euismod urna efficitur condimentum</p>
            <Link>
              <button className='btn'>
                <img src={btn} className='btn-img' alt='btn' /> Hire Me
              </button>
            </Link>
        </div>
        <img src={bg} className='bg' alt='profile' />
    </div>
  )
} 