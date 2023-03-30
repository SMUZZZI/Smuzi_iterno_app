import React from 'react'
import { Link } from 'react-router-dom';
import "./lastpostblank.css"



function LastPostBlank() {
    return (
        <section className='lastpost-blank'>
            <div className='lastpost-blank-title-main gradient-img'/>
            <article className='lastpost-blank-container gradient-main'>
                <div className="lastpost-blank-img-container gradient-img"/>
                <div className="lastpost-blank-text-block">
                    <div className='lastpost-blank-title-post gradient-img'/>
                    <div className='lastpost-blank-text-post gradient-img'/>
                    <div className="lastpost-blank-tag-btn-block">
                        <div className='lastpost-blank-date gradient-img'/>
                        <div className='lastpost-blank-link gradient-img'/>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default LastPostBlank