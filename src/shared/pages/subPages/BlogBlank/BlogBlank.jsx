import React from 'react'
import "./blogblank.css"

function BlogBlank({ data }) {
    const blank = data

    return (
        <ul className='blog-blank-content'>
            {
                blank.map(i => (
                    <li key={i} className="blog-blank gradient-main">
                        <div className="blog-blank-img-block">
                            <div className="blog-blank-img gradient-img" />
                            <div className="blog-blank-img-tag" />
                        </div>
                        <div className="blog-blank-title gradient-img" />
                        <div className="blog-blank-date-block">
                            <div className="blog-blank-date gradient-img" />
                            <div className='blog-blank-link gradient-img' />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default BlogBlank
