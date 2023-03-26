import React, { Suspense, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthAdmin, selectIsAuth } from "../shared/slices/auth";

import './App.css';
import "../shared/pages/Home/main.css";

import Header from '../shared/Header/Header';
import Footer from "../shared/Footer/Footer";

const Main = React.lazy(() => import("../shared/pages/Home/Main"))
const AboutUsPage = React.lazy(() => import("../shared/pages/AboutUs/AboutUsPage"))
const ServicesPage = React.lazy(() => import("../shared/pages/ServicesPage/ServicesPage"))
const ServiceSingle = React.lazy(() => import("../shared/pages/ServiceSingle/ServiceSingle"))
const Project = React.lazy(() => import("../shared/pages/Project/Project"))
const ProjectDetails = React.lazy(() => import("../shared/pages/ProjectDetails/ProjectDetails"))
const BlogPage = React.lazy(() => import("../shared/pages/BlogPage/BlogPage"))
const BlogSingle = React.lazy(() => import("../shared/pages/BlogSingle/BlogSingle"))
const TeamPage = React.lazy(() => import("../shared/pages/TeamPage/TeamPage"))
const TeamSingle = React.lazy(() => import("../shared/pages/TeamSingle/TeamSingle"))
const ContactUsPage = React.lazy(() => import("../shared/pages/ContactUsPage/ContactUsPage"))
const AdminPage = React.lazy(() => import("../shared/adminPage/AdminPage"))
const AdminLogin = React.lazy(() => import("../shared/adminPage/AdminLogin/AdminLogin"))

function App() {
  
  const dispatch = useDispatch()

  const isAuth = useSelector(selectIsAuth)

  useEffect(() => {
    dispatch(fetchAuthAdmin())
  }, []); return (
    <div className='container'>
      {
          <Suspense fallback={
            <div className="loader-container">
              <span class="loader"></span>
            </div>
          }>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/single" element={<ServiceSingle />} />
              <Route path="/project/*" element={<Project />} />
              <Route path="/project/id=/:id" element={<ProjectDetails />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogSingle />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/team/details" element={<TeamSingle />} />
              <Route path="/contactus" element={<ContactUsPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/login" element={<AdminLogin />} />
            </Routes>
            <Footer />
          </Suspense>
      }
    </div>
  );
}

export default App;
