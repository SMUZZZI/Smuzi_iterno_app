import React from 'react'
import { Link } from 'react-router-dom';
import "./projectlistitem.css"

function ProjectListItem(data) {
    const items = data.data;

    return (
        <ul className='projectlist-list'>
            {
                items.map(item => (
                    <li key={item._id} className='projectlist-item'>
                        <img src={item.img} className="projectlist-item-img" />
                        <div className='projectlist-item-content'>
                            <div className='projectlist-item-text-content'>
                                <h3 className='projectlist-item-title title-h3'>{item.title}</h3>
                                <p className='p-black-gray'>{item.tag}</p>
                            </div>
                            <Link to={`/project/id=/${item._id}`} state={item._id} className="circle-btn"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="currentColor" />
                                    <path d="M32 44L40 35L32 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </li>
                ))
            }
        </ul>
    )

}

export default ProjectListItem
