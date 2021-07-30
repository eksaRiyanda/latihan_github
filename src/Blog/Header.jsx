import React from 'react'
import './header.css'
import Img2 from './2.jpg'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg' src={Img2} alt="Img2"/>
        </div>
    );
}
