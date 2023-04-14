import React from "react";
import { Link } from 'react-router-dom'
import "./blogItem.css";

function BlogItem({ blogCard }) {

    return (
        <li key={blogCard._id} className="blog-item">
            <div className="blog-img-block">
                <img src={`http://45.146.166.237:5000${blogCard.img}`} className="blog-img" />
                <div className="blog-img-tag">{blogCard.tag}</div>
            </div>

            <div className="blog-item-main-block">
                <h3 className="blog-item-title title-h3">{blogCard.title.slice(0, 20)}...</h3>

                <div className="blog-date-block">
                    <p className="blog-date">{blogCard.updatedAt.slice(0, 10)}</p>
                    <Link to={`/blog/${blogCard._id}`} className="blog-btn"
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
            </div>
        </li>
    );
}

export default BlogItem;