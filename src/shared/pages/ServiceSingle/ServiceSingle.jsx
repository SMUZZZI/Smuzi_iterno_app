import React from 'react'
import { useLocation } from 'react-router-dom'
import Banner from '../subPages/Banner/Banner'
import Details from './Details/Details'
import ClientLogo from '../subPages/ClientLogo/ClientLogo'
import VideoPlayer from '../subPages/VideoPlayer/VideoPlayer'
import Points from './Points/Points'
import ToPortfolio from './ToPortfolio/ToPortfolio'
import Counter from '../subPages/Counter/Counter'

import "./servicesingle.css"

import bannerBg from "./img/ServiceSingle.jpg"
 
const background = {
    name: "Service Single",
    tag: "Home / Services Single",
    img: bannerBg,
}


function ServiceSingle() {
    const location = useLocation();
    const Data = location.state;

    return (
        <main className='servicesingle'>
            <Banner background={background} />
            <Details detailsData={Data.detailsData}/>
            <ClientLogo />
            <VideoPlayer videoData={Data.videoData}/>
            <Points />
            <ToPortfolio />
            <Counter />
        </main>
    )
}

export default ServiceSingle