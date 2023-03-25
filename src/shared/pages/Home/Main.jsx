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



function Main() {

    const dispath = useDispatch()
    const blogData = useSelector(state => state.blog)
    const isBlogLoading = blogData.status === "loading";
    
    const projectData = useSelector(state => state.project)
    const isProjectLoading = projectData.status === "loading";

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
                isProjectLoading ?
                <div>Loading...</div>
                :
                <OurProjects ourProjects={projectData.items} />
            }
            <Counter />
            {
                isBlogLoading ?
                <div>Loading...</div>
                :
                <Blog blogData={blogData.items} />
            }
            <Contact />
        </main>
    );
}

export default Main;