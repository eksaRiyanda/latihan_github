import React from 'react'
import './sidebar.css'
import Img3 from './3.jpeg'

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={Img3}  alt="Img3"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="topIcon fab fa-facebook-f"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-youtube"></i>
            </div>
            </div>
        </div>
    )
}
