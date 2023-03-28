import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectParam } from '../../slices/project';
import "./project.css"

import Banner from '../subPages/Banner/Banner'
import ProjectList from './ProjectList/ProjectList';
import Pagination from '../subPages/Pagination/Pagination';


import projectBg from "./img/projectbg.jpg"
import ProjectBlank from '../subPages/ProjectBlank/ProjectBlank';
const background = {
    name: "Our Project",
    tag: "Home / Project",
    img: projectBg,
}

function Project() {

    const dispatch = useDispatch()
    const data = useParams();

    const projectData = useSelector(state => state.project)
    const isProjectLoading = projectData.status === "loading" | "error";

    useEffect(() => {
        dispatch(fetchProjectParam("bathroom"))
    }, []);

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);

    const [currentPageBTN, setCurrentPageBTN] = useState(1);

    useEffect(() => {
        switch (data) {
            case "/project/bathroom":
                setCurrentPageBTN(1)
                break;
            case "/project/bedroom":
                setCurrentPageBTN(2)
                break;
            case "/project/kitchan":
                setCurrentPageBTN(3)
                break;
            case "/project/livingArea":
                setCurrentPageBTN(4)
                break;

            default:
                break;
        }
    }, [data])

    const paginate = (pageNum) => {
        setCurrentPage(pageNum);
        window.scrollTo(0, 650);
    }

    return (
        <main className='projectpage'>
            <Banner background={background} />
            <section className='projecttabs'>
                <ul className='projecttabs-list'>
                    <li>
                        <Link to="/project/bathroom" state={projectData.items} className={`projecttabs-btn ${currentPageBTN === 1 && "projecttabs-btn-active"}`}
                            onClick={() => {
                                dispatch(fetchProjectParam("bathroom"))
                            }}>Bathroom</Link>
                    </li>
                    <li>
                        <Link to="/project/bedroom" state={projectData.items} className={`projecttabs-btn ${currentPageBTN === 2 && "projecttabs-btn-active"}`}
                            onClick={() => {
                                dispatch(fetchProjectParam("bedroom"))
                            }}>Bed Room</Link>
                    </li>
                    <li>
                        <Link to="/project/kitchan" state={projectData.items} className={`projecttabs-btn ${currentPageBTN === 3 && "projecttabs-btn-active"}`}
                            onClick={() => {
                                dispatch(fetchProjectParam("kitchan"))
                            }}>Kitchan</Link>
                    </li>
                    <li>
                        <Link to="/project/livingArea" state={projectData.items} className={`projecttabs-btn ${currentPageBTN === 4 && "projecttabs-btn-active"}`}
                            onClick={() => {
                                dispatch(fetchProjectParam("livingroom"))
                            }}>Living Area</Link>
                    </li>
                </ul>
            </section>
            {
                isProjectLoading ?
                    <ProjectBlank data={[1,2,3,4,5,6]}/>
                    :
                    <Routes>
                        <Route path="/*" element={<ProjectList
                            data={projectData.items}
                            postsData={{
                                posts,
                                currentPage,
                                postPerPage,
                                setPosts
                            }} />} />
                    </Routes>
            }
            <Pagination
                postPerPage={postPerPage}
                totalPosts={projectData.items.length}
                paginate={paginate}
            />
        </main>
    )
}

export default Project
