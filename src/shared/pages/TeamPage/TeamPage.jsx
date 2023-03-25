import React from 'react'
import { useSelector } from 'react-redux';

import Banner from '../subPages/Banner/Banner'
import "./teampage.css"
import TeamPageList from './TeamPageItem/TeamPageList';


import backgroundImg from "./img/teamBanner.jpg"
const background={
  name: "Our Professional",
  tag: "Home / Team",
  img: backgroundImg,
}

function TeamPage() {
  const data = useSelector(state => state.repos.items.team);

  return (
    <main className='teampage'>
        <Banner background={background}/>
        <TeamPageList data={data}/>
    </main>
  )
}

export default TeamPage