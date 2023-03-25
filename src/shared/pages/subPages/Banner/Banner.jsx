import React from 'react';
import "./banner.css"

function Banner({background}) {
  return (
    <section className='banner'
    style={{
      backgroundImage: `url(${background.img})`
    }}>
        <div className='banner-tag'>
            <h1 className='title-h2-small'>{background.name}</h1>
            <p className='p-black-gray'>{background.tag}</p>
        </div>
    </section>
  )
}

export default Banner;