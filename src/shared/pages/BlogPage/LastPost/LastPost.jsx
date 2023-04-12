import React from 'react'
import { Link } from 'react-router-dom';
import "./lastpost.css"



function LastPost({ data }) {
    const date = data.updatedAt.slice(0, 10)
    return (
        <section className='lastpost'>
            <h2 className='lastpost-title-main title-h2-small'>Latest Post</h2>
            <article className='lastpost-container'>
                <div className="lastpost-img-container">
                    <img src={`http://45.146.166.237:5000${data.img}`} className="lastpost-img" />
                </div>
                <div className="lastpost-text-block">
                    <h3 className='lastpost-title-post title-h3'>{data.title.slice(0, 30)}...</h3>
                    <p className='lastpost-text-post p-black-gray'>{data.text.slice(0, 30)}...</p>
                    <div className="lastpost-tag-btn-block">
                        <p className='lastpost-date'>{date}</p>
                        <Link to={`/blog/${data._id}`} state={data._id} className="lastpost-blog-btn"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.5" r="26" fill="currentColor" />
                                <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default LastPost