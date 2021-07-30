import React from 'react'
import './singlepost.css'
import Img5 from './5.jpg'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src={Img5} alt="Img5" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostDate">1 hours ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam tempore aliquam ab maiores magni dolorem cumque temporibus expedita fuga! Inventore itaque placeat expedita necessitatibus veritatis? Explicabo modi magni molestias ut.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto atque maxime amet necessitatibus quos alias! Deleniti porro accusamus reprehenderit expedita tempora, error molestias officiis asperiores magnam illo sunt? Eius!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti corporis itaque exercitationem necessitatibus qui, molestias ab maiores quia officia sed ipsum id, odio delectus, provident animi porro non magnam.
                </p>
            </div>
        </div>
    )
}
