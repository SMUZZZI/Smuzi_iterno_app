import React from 'react'
import { useSelector } from 'react-redux';

import "./aboutuspage.css";
import Banner from '../subPages/Banner/Banner';
import AboutUsResult from './AboutUsResult/AboutUsResult';
import MailBox from './MailBox/MailBox';
import Quotes from './Quotes/Quotes';
import AboutUsTeam from '../subPages/AboutUsTeam/AboutUsTeam';
import WhatWeDo from './WhatWeDo/WhatWeDo';

//banner background image
import backgroundImg from "./img/aboutusP.jpg"
const background={
  name: "About Us",
  tag: "Home / About Us",
  img: backgroundImg,
}

function AboutUsPage() {

  const aboutUsData = useSelector(state => state.repos.items.team)

  return (
    <main className='about-usP'>
        <Banner background={background}/>
        <Quotes />
        <WhatWeDo />
        <AboutUsResult />
        <AboutUsTeam data={aboutUsData} title={"What the People Thinks About Us"}/>
        <MailBox />
    </main>
  )
}

export default AboutUsPage;