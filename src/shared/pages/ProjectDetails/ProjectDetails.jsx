import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "../../actions/axios";
import { useEffect } from 'react';

import "./projectdetails.css"
import Banner from '../subPages/Banner/Banner'
import ProjectDetailsTextBlock from './ProjectDetailsTextBlock/ProjectDetailsTextBlock';


import projectDetailsBg from "./img/projectDetailsBanner.jpg"
import ProjectDetailsPhotoBlock from './ProjectDetailsPhotoBlock/ProjectDetailsPhotoBlock';
const background = {
    name: "Project Details",
    tag: "Home / Project / Details",
    img: projectDetailsBg,
}

function ProjectDetails() {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/project/id=/${id}`)
            .then(res => {
                setData(res);
                setIsLoading(false)
            })
            .catch(err => {
                console.warn(err);
                alert("Ошибка при получении проекта")
            })
    }, []);

    return (
        <main>
            <Banner background={background} />
            {
                isLoading ?
                    <div>Loading...</div>
                    :
                    <>
                        <ProjectDetailsTextBlock data={data.data} />
                        <ProjectDetailsPhotoBlock data={data.data} />
                    </>
            }
        </main>
    )
}

export default ProjectDetails