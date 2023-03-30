import React from 'react'
import { useSelector } from 'react-redux';

import Banner from '../subPages/Banner/Banner'
import "./teampage.css"
import TeamPageList from './TeamPageItem/TeamPageList';


import backgroundImg from "./img/teamBanner.jpg"
import TeamPageListBlank from '../subPages/TeamPageListBlank/TeamPageListBlank';
const background = {
  name: "Our Professional",
  tag: "Home / Team",
  img: backgroundImg,
}

function TeamPage() {
  // const data = useSelector(state => state.repos.items.team);
  const data = [1,2,3];

  const isTeamLoading = true

  return (
    <main className='teampage'>
      <Banner background={background} />
      {
        isTeamLoading ?
        <TeamPageListBlank data={[1,2,3,4,5,6,7,8]} /> 
          :
          <TeamPageList data={data} />
      }
    </main>
  )
}

export default TeamPage