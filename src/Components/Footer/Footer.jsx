import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer_container'>
        <div className='footer-row'>
            <div className='footer-col'>
                <div className='footer-col-name'>
                    <h2>COMPANY</h2>
                </div>
                <ul className='footer-list-items'>
                    <li><a href='/'>About</a></li>
                    <li><a href='/products'>Delivery Menu</a></li>
                    <li><a href='/products' >Services Menu</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <div className='footer-col-name'>
                    <h2>CONTACT</h2>
                </div>
                <ul className='footer-list-items'>
                    <li><a href='#'>Gmail</a></li>
                    <li><a href='#' style={{fontSize:"2rem"}}>Lazybee.service@gmail.com</a></li>
                    <li><a href='#'>WhatsApp</a></li>
                    <li><a href='#' style={{fontSize:"2rem"}}>+91 7303490702</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <div className='footer-col-name footer-col-spl'>
                    <h2>FOLLOW</h2>
                </div>
                <div className='follow-links'>
                    <ul>
                    <a href='https://www.instagram.com/lazybee.service/'><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://www.facebook.com/profile.php?id=100086326747436'><i class="fa-brands fa-facebook"></i></a>
                    <i class="fa-brands fa-whatsapp"></i>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer