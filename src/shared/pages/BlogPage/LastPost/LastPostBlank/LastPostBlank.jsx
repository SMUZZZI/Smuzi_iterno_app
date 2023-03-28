import React from 'react'
import { Link } from 'react-router-dom';
import "./lastpostblank.css"



function LastPostBlank() {
    return (
        <section className='lastpost-blank'>
            <div className='lastpost-blank-title-main'/>
            <article className='lastpost-blank-container'>
                <div className="lastpost-blank-img-container"/>
                <div className="lastpost-blank-text-block">
                    <div className='lastpost-blank-title-post'/>
                    <div className='lastpost-blank-text-post'/>
                    <div className="lastpost-blank-tag-btn-block">
                        <div className='lastpost-blank-date'/>
                        <div className='lastpost-blank-link'/>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default LastPostBlank