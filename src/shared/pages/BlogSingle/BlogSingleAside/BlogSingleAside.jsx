import React, { useEffect, useState } from 'react'
import axios from "../../../actions/axios";

import { Link } from 'react-router-dom'
import "./blogsingleaside.css"


function BlogSingleAside({ Tags }) {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`/api/blog/3/1`)
            .then(res => {
                setData(res);
                setIsLoading(false)
            })
            .catch(err => {
                console.warn(err);
                alert("Ошибка при получении блога")
            })
    }, []);

    return (
        <section className='blogsingleaside'>
            <h3 className='blogsingleaside-title title-h3'>Latest News</h3>
            <ul className='blogsingleaside-news'>
                {
                    isLoading ?
                        <div>Loading...</div>
                        :
                        <>
                            {data.data.map(item => (
                                <li key={item._id} className="blogsingleaside-news-item">
                                    <Link to={`/blog/${item._id}`} className="blogsingleaside-news-item-link"
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                        }}
                                    >
                                        <h3 className='blogsingleaside-news-item-p'>{item.title.slice(0, 30)}...</h3>
                                        <p className='blogsingleaside-news-item-date'>{item.updatedAt.slice(0, 10)}</p>
                                    </Link>
                                </li>
                            ))}
                        </>
                }
            </ul>
            <div className='blogsingleaside-category-block'>
                <ul className='blogsingleaside-category'>
                    <h3 className='blogsingleaside-category-title'>Categories</h3>
                    {Tags.map(i => (
                        <li key={i} className="blogsingleaside-category-item">
                            <p className='blogsingleaside-p'>{i}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default BlogSingleAside