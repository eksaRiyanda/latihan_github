import React from 'react'
import './topbar.css'
import Img1 from './1.jfif'

export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-f"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-youtube"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                
                <img className="topImg" src={Img1} alt="Img1" />
                <i className="topSeachIcon fab fa-searchengin"></i>

            </div>
        </div>
    )
}
