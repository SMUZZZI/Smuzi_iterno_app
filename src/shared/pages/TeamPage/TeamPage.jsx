import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Banner from '../subPages/Banner/Banner'
import "./teampage.css"
import TeamPageList from './TeamPageItem/TeamPageList';
import TeamPageListBlank from '../subPages/TeamPageListBlank/TeamPageListBlank';
import Error from '../subPages/Error/Error';
import { fetchTeam } from '../../slices/team';


import backgroundImg from "./img/teamBanner.jpg"
const background = {
  name: "Our Professional",
  tag: "Home / Team",
  img: backgroundImg,
}

function TeamPage() {
  const dispath = useDispatch()
  const data = useSelector(state => state.team)

  const isTeamLoading = data.status === "loading";
  const isTeamError = data.status === "error";

  useEffect(() => {
    dispath(fetchTeam())
  }, []);

  return (
    <main className='teampage'>
      <Banner background={background} />
      {
        isTeamError ?
        <Error errorStatus={"500"} descr={"Не удалось загрузить team"} />
        :
        isTeamLoading ?
        <TeamPageListBlank data={[1,2,3,4,5,6,7,8]} /> 
          :
          <TeamPageList data={data} />
      }
    </main>
  )
}

export default TeamPage