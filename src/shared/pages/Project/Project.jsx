import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectLimit, fetchProjectParam } from '../../slices/project';
import "./project.css"

import Banner from '../subPages/Banner/Banner'
import ProjectList from './ProjectList/ProjectList';
import Pagination from '../subPages/Pagination/Pagination';

import projectBg from "./img/projectbg.jpg"

import ProjectBlank from '../subPages/ProjectBlank/ProjectBlank';
import Error from '../subPages/Error/Error';
import { paginationSet } from '../../slices/pagination';

const background = {
    name: "Our Project",
    tag: "Home / Project",
    img: projectBg,
}

function Project() {
    const dispatch = useDispatch()

    const projectData = useSelector(state => state.projectLimit)
    const isProjectLoading = projectData.status === "loading";
    const isProjectError = projectData.status === "error";

    const num = useSelector(state => state.pagination)
    const totalPosts = useSelector(state => state.project.items)
    const { id } = useParams()
    
    const [searchParams, setSearchParams] = useSearchParams()
    const pageQuery = searchParams.get("page") || "1"
   
    const [currentPageBTN, setCurrentPageBTN] = useState(1);

   //позиционирование экрана
    useEffect(() => {
        window.scrollTo(0, 300);
    }, [isProjectLoading]);

    //переключение страниц
    useEffect(() => {
        //задаем параметры через пагинацию
        setSearchParams({ page: num })
        
        //фетчим проекты по пагинации
        dispatch(fetchProjectLimit({ id, page: num }))
    }, [num]);

    //стартовые параметры
    const btnParams = (id, btn) => {
        //добавляем параметры в строку
        setSearchParams({ page: pageQuery || num })

        //фетчим проекты по id для пагинации
        dispatch(fetchProjectParam(id))

        //фетчим проекты по id и странице
        dispatch(fetchProjectLimit({ id, page: pageQuery || num }))

        //переключение кнопок и изменение пагинации
        setCurrentPageBTN(btn)
        dispatch(paginationSet( pageQuery || 1))
    }


    useEffect(() => {
        switch (id) {
            case "bathroom":
                btnParams("bathroom", 1)
                break;
            case "bedroom":
                btnParams("bedroom", 2)
                break;
            case "kitchan":
                btnParams("kitchan", 3)
                break;
            case "livingroom":
                btnParams("livingroom", 4)
                break;
            default:
                break;
        }
    }, [id])



    return (
        <main className='projectpage'>
            <Banner background={background} />
            <section className='projecttabs'>
                <ul className='projecttabs-list'>
                    <li>
                        <Link to="/project/bathroom" className={`projecttabs-btn ${currentPageBTN === 1 && "projecttabs-btn-active"}`}>Bathroom</Link>
                    </li>
                    <li>
                        <Link to="/project/bedroom" className={`projecttabs-btn ${currentPageBTN === 2 && "projecttabs-btn-active"}`}>Bed Room</Link>
                    </li>
                    <li>
                        <Link to="/project/kitchan" className={`projecttabs-btn ${currentPageBTN === 3 && "projecttabs-btn-active"}`}>Kitchen</Link>
                    </li>
                    <li>
                        <Link to="/project/livingroom" className={`projecttabs-btn ${currentPageBTN === 4 && "projecttabs-btn-active"}`}>Living Area</Link>
                    </li>
                </ul>
            </section>
            {
                isProjectError ?
                    <Error errorStatus={"500"} descr={"Не удалось загрузить проекты"} />
                    :
                    isProjectLoading ?
                        <ProjectBlank data={[1, 2, 3, 4, 5, 6]} />
                        :
                        <div>
                            <Routes>
                                <Route path="/*" element={<ProjectList currentPosts={projectData.items} />} />
                            </Routes>

                            <Pagination
                                totalPosts={totalPosts.length}
                                currentNum={num}
                                perPage={8}
                            />
                        </div>
            }
        </main>
    )
}

export default Project
