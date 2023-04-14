import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBlog } from "../../slices/blog";
import { fetchProject } from '../../slices/project';

import AboutUs from "./AboutUs/AboutUs";
import Hero from "./Hero/Hero";
import Testimonial from "./Testimonial/Testimonial";
import Work from "./Work/Work";
import ClientLogo from "../subPages/ClientLogo/ClientLogo";
import OurProjects from "./OurProjects/OurProjects";
import Counter from "../subPages/Counter/Counter";
import Blog from "./Blog/Blog";
import Contact from "../subPages/Contact/Contact";

import ProjectBlank from '../subPages/ProjectBlank/ProjectBlank';
import BlogBlank from '../subPages/BlogBlank/BlogBlank';
import Error from '../subPages/Error/Error';

import "./main.css";

function Main() {

    const dispath = useDispatch()
    const blogData = useSelector(state => state.blog)
    const isBlogLoading = blogData.status === "loading";
    const isBlogError = blogData.status === "error";

    const projectData = useSelector(state => state.project)
    const isProjectLoading = projectData.status === "loading";
    const isProjectError = projectData.status === "error";

    useEffect(() => {
        dispath(fetchBlog())
        dispath(fetchProject())
    }, []);

    return (
        <main className="main">
            <Hero />
            <Work />
            <AboutUs />
            <Testimonial />
            <ClientLogo />
            {
                isProjectError ?
                    <Error errorStatus={"500"} descr={"Не удалось загрузить проекты"} />
                    :
                    isProjectLoading ?
                        <div className="main-blank">
                            <ProjectBlank data={[1, 2, 3, 4]} />
                        </div>
                        :
                        <OurProjects ourProjects={projectData.items} />
            }
            <Counter />
            {
                isBlogError ?
                    <Error errorStatus={"500"} descr={"Не удалось загрузить посты"} />
                    :
                    isBlogLoading ?
                        <div className="main-blank">
                            <BlogBlank data={[1, 2, 3]} />
                        </div>
                        :
                        <Blog blogData={blogData.items} />
            }
            <Contact />
        </main>
    );
}

export default Main;