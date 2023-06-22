import React from 'react'
import './searchpage.css'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'


function SearchPage() {
    const data = useSelector(state => state.search)
    if (data.length == 0) {
        return <Navigate to="/" />
    }
    return (
        <section className='searchpage'>
            <ul className='searchpage-list'>
                {
                    data != null ?
                        data.map(item => (
                            item.projectid ?
                                <li key={item._id} className='searchpage-item'>
                                    <img src={`http://45.146.166.237:5000${item.img}`} className='searchpage-item-img' />
                                    <div className='search-item-title-block'>
                                        <p>{item.title.slice(0, 18)}...</p>
                                        <Link to={`/project/id=/${item._id}`} className='search-item-link'>
                                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="26" cy="26.2671" r="26" fill="currentColor" />
                                                <path d="M23.771 32.9529L29.7139 26.2672L23.771 19.5815" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <p className='searchpage-item-date'>{item.updatedAt.slice(0, 10)}</p>
                                </li>
                                :
                                <li key={item._id} className='searchpage-item'>
                                    <img src={`http://45.146.166.237:5000${item.img}`} className='searchpage-item-img' />
                                    <div className='search-item-title-block'>
                                        <p>{item.title.slice(0, 18)}...</p>
                                        <Link to={`/blog/id=/${item._id}`} className='search-item-link'>
                                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="26" cy="26.2671" r="26" fill="currentColor" />
                                                <path d="M23.771 32.9529L29.7139 26.2672L23.771 19.5815" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <p className='searchpage-item-date'>{item.updatedAt.slice(0, 10)}</p>
                                </li>
                        ))
                        :
                        null
                }
            </ul>
        </section>
    )
}

export default SearchPage
