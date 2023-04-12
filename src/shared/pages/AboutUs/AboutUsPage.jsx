import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import "./aboutuspage.css";
import Banner from '../subPages/Banner/Banner';
import AboutUsResult from './AboutUsResult/AboutUsResult';
import MailBox from './MailBox/MailBox';
import Quotes from './Quotes/Quotes';
import AboutUsTeam from '../subPages/AboutUsTeam/AboutUsTeam';
import WhatWeDo from './WhatWeDo/WhatWeDo';

import { fetchTeam } from '../../slices/team';
import TeamPageListBlank from '../subPages/TeamPageListBlank/TeamPageListBlank';
import Error from '../subPages/Error/Error';

//banner background image
import backgroundImg from "./img/aboutusP.jpg"
const background = {
  name: "About Us",
  tag: "Home / About Us",
  img: backgroundImg,
}

function AboutUsPage() {
  const dispath = useDispatch()
  const aboutUsData = useSelector(state => state.team)

  const isTeamLoading = aboutUsData.status === "loading";
  const isTeamError = aboutUsData.status === "error";

  useEffect(() => {
    dispath(fetchTeam())
  }, []);

  return (
    <main className='about-usP'>
      <Banner background={background} />
      <Quotes />
      <WhatWeDo />
      <AboutUsResult />
      {
        isTeamError ?
          <Error errorStatus={"500"} descr={"Не удалось загрузить team"} />
          :
          isTeamLoading ?
            <TeamPageListBlank data={[1, 2, 3, 4]} />
            :
            <AboutUsTeam data={aboutUsData} title={"What the People Thinks About Us"} />
      }
      <MailBox />
    </main>
  )
}

export default AboutUsPage;