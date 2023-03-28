import React from 'react'
import "./blogblank.css"

function BlogBlank({ data }) {
    const blank = data

    return (
        <ul className='blog-blank-content'>
            {
                blank.map(i => (
                    <li key={i} className="blog-blank">
                        <div className="blog-blank-img-block">
                            <div className="blog-blank-img" />
                            <div className="blog-blank-img-tag" />
                        </div>
                        <div className="blog-blank-title" />
                        <div className="blog-blank-date-block">
                            <div className="blog-blank-date" />
                            <div className='blog-blank-link' />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default BlogBlank
