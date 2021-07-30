import React from 'react'
import Header from './Header'
import './home.css'
import Post from './Post'
import SideBar from './SideBar'

export default function Home() {
    return (
        <>
        <Header/>
        <div className='home'>
            <Post/>
            <SideBar/>
        </div>
        </>
    );
}
