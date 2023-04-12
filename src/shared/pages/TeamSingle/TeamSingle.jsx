import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import Banner from '../subPages/Banner/Banner'
import TeamMemberDetail from './TeamMemberDetail/TeamMemberDetail'
import TeamBiography from './TeamBiography/TeamBiography';
import AboutUsTeam from '../subPages/AboutUsTeam/AboutUsTeam';
import TeamMail from './TeamMail/TeamMail';
import "./teamsingle.css"
import axios from "../../actions/axios";
import { fetchTeam } from '../../slices/team';
import TeamPageListBlank from '../subPages/TeamPageListBlank/TeamPageListBlank';
import Error from '../subPages/Error/Error';

import backgroundImg from "./img/teamsingleBanner.jpg"
const background = {
    name: "Professional Single",
    tag: "Home / Team Single",
    img: backgroundImg,
}

function TeamSingle() {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/team/${id}`)
            .then(res => {
                setData(res);
                setIsLoading(false)
            })
            .catch(err => {
                console.warn(err);
                alert("Ошибка при получении проекта")
            })
    }, [id]);

    const dispath = useDispatch()
    const aboutUsData = useSelector(state => state.team)
  
    const isTeamLoading = aboutUsData.status === "loading";
    const isTeamError = aboutUsData.status === "error";
  
    useEffect(() => {
      dispath(fetchTeam())
    }, []);

    return (
        <main className='teamsingle'>
            {
                isLoading ?
                    <div>loading...</div>
                    :
                    <>
                        <Banner background={background} />
                        <TeamMemberDetail Data={data} />
                        <TeamBiography data={data} />
                        {
                            isTeamError ?
                            <Error errorStatus={"500"} descr={"Не удалось загрузить team"} />
                            :
                            isTeamLoading ?
                            <TeamPageListBlank data={[1, 2, 3, 4]} />
                            :
                            <AboutUsTeam data={aboutUsData} title={"Our Team Members"} />
                        }
                        <TeamMail />
                    </>
            }
        </main>
    )
}

export default TeamSingle