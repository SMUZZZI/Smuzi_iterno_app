import React, { Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import './App.css';

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
const AdminProjectNew = React.lazy(() => import("../shared/adminPage/AdminProject/AdminProjectNew/AdminProjectNew"))
const AdminProjectEdit = React.lazy(() => import("../shared/adminPage/AdminProject/AdminProjectEdit/AdminProjectEdit"))
const AdminBlogNew = React.lazy(() => import("../shared/adminPage/AdminBlog/AdminBlogNew/AdminBlogNew"))
const AdminBlogEdit = React.lazy(() => import("../shared/adminPage/AdminBlog/AdminBlogEdit/AdminBlogEdit"))
const AdminTeamNew = React.lazy(() => import("../shared/adminPage/AdminTeam/AdminTeamNew/AdminTeamNew"))
const AdminTeamEdit = React.lazy(() => import("../shared/adminPage/AdminTeam/AdminTeamEdit/AdminTeamEdit"))

function App() {

  return (
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
            <Route path="/project/:id/:page/*" element={<Project />} />
            <Route path="/project/id=/:id" element={<ProjectDetails />} />
            <Route path="/blog/:page" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogSingle />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/team/details/:id" element={<TeamSingle />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/admin/project/new" element={<AdminProjectNew />} />
            <Route path="/admin/project/:id/edit" element={<AdminProjectEdit />} />
            <Route path="/admin/blog/new" element={<AdminBlogNew />} />
            <Route path="/admin/blog/:id/edit" element={<AdminBlogEdit />} />
            <Route path="/admin/team/new" element={<AdminTeamNew />} />
            <Route path="/admin/team/:id/edit" element={<AdminTeamEdit />} />
          </Routes>
          <Footer />
        </Suspense>
      }
    </div>
  );
}

export default App;
