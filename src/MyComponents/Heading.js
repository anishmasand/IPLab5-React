import React from 'react'
import './Heading.css';

export const Heading = () => {
    return (
        <div className="temp" style={{display:"flex"}}>
            <img className='image' src="https://d30mzt1bxg5llt.cloudfront.net/public/uploads/images/_signatoryLogo/VES-logo.png"
                 alt="" />
            <figure className="text-center">
                <blockquote className="blockquote">
                    <h1>Vivekanand Education Society's Institute of Tech</h1>
                </blockquote>
             
            </figure>
        </div>
    )
}
// 12.style={"font-family: Sofia, sans-serif"}