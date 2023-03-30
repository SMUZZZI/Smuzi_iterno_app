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
import TeamPageListBlank from '../subPages/TeamPageListBlank/TeamPageListBlank';
const background={
  name: "About Us",
  tag: "Home / About Us",
  img: backgroundImg,
}

function AboutUsPage() {

  // const aboutUsData = useSelector(state => state.repos.items.team)
  const aboutUsData = [1,2,3];

  const isTeamLoading = true

  return (
    <main className='about-usP'>
        <Banner background={background}/>
        <Quotes />
        <WhatWeDo />
        <AboutUsResult />
        {
          isTeamLoading ?
          <TeamPageListBlank data={[1,2,3,4]} /> 
          :
        <AboutUsTeam data={aboutUsData} title={"What the People Thinks About Us"}/>
        }
        <MailBox />
    </main>
  )
}

export default AboutUsPage;