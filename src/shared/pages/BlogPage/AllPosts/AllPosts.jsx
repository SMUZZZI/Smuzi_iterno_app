import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./allposts.css"


function AllPosts({ data, postsData }) {


    const posts = postsData.posts;
    const currentPage = postsData.currentPage;
    const postPerPage = postsData.postPerPage;

    const setPosts = postsData.setPosts;
    useEffect(() => {
        setPosts(data);
    })
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <section className='allposts'>
            <h2 className='allposts-title'>Articles & News</h2>
            <ul className='allposts-list'>
                {
                    currentPosts.map(i => (
                        <li key={i._id} className="allposts-blog-item">
                            <div className="allposts-blog-img-block">
                                <img src={i.img} className="allposts-blog-img" />
                                <div className="allposts-blog-img-tag">{i.tag}</div>
                            </div>

                            <h3 className="allposts-blog-item-title title-h3">{i.title}</h3>

                            <div className="allposts-blog-date-block">
                                <p className="allposts-blog-date">{i.updatedAt.slice(0, 10)}</p>
                                <Link to={`/blog/${i._id}`} state={i._id} className="blog-btn"
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="26" cy="26.2671" r="26" fill="currentColor" />
                                        <path d="M23.771 32.9529L29.7139 26.2672L23.771 19.5815" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default AllPosts