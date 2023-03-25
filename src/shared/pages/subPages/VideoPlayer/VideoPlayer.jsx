import React from 'react'
import ReactPlayer from 'react-player'

import "./videoplayer.css"

function VideoPlayer({ videoData }) {
    return (
        <section className='videoplayer-container'>
            <ReactPlayer url={videoData.link} width="1200px" height="374px" className="videoplayer"/>
        </section>
    )
}

export default VideoPlayer