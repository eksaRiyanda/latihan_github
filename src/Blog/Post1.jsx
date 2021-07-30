import React from 'react'
import './post1.css'
import Img4 from './4.jpg'

export default function post1() {
    return (
        <div className='post'>
            <img className='postImg' src={Img4} alt="Img4" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum,
                </span>
                <hr/>
                <span className="postDate">1 hours ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, debitis corporis possimus accusantium ea aliquam blanditiis unde ipsum modi quia amet veritatis magnam est voluptates aut, ad laborum in cupiditate!
            </p>
        </div>
    )
}
