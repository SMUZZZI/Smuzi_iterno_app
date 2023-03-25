import React from 'react'
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';
import Banner from '../subPages/Banner/Banner'
import TeamMemberDetail from './TeamMemberDetail/TeamMemberDetail'
import TeamBiography from './TeamBiography/TeamBiography';
import AboutUsTeam from '../subPages/AboutUsTeam/AboutUsTeam';
import TeamMail from './TeamMail/TeamMail';
import "./teamsingle.css"

import backgroundImg from "./img/teamsingleBanner.jpg"
const background = {
    name: "Professional Single",
    tag: "Home / Team Single",
    img: backgroundImg,
}
function TeamSingle() {
    const aboutUsData = useSelector(state => state.repos.items.team);
    let location = useLocation();
    let Data = location.state;
    return (
        <main className='teamsingle'>
            <Banner background={background} />
            <TeamMemberDetail data={Data} />
            <TeamBiography data={Data} />
            <AboutUsTeam data={aboutUsData} title={"Our Team Members"}/>
            <TeamMail />
        </main>
    )
}

export default TeamSingle