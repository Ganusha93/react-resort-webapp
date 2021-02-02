import React from 'react'

export default function Menu({menu}) {

    const{name,images,price}=menu;
    return (
       <article>
           <div className="img-container">
                <img src={images[0] } alt="single room" />
                <div className="price-top">
                    <h6>¥{price}</h6>
                    <p>per dish</p>
                </div>
                
            </div>
            <p className="room-info">{name}</p>
       </article>
    )
}
