import React from 'react'
import './single.css'
import Sidebar from './SideBar'
import SinglePost from './SinglePost'

export default function Single() {
    return (
        <div className='single'>
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}
