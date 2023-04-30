import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { selectIsAuth } from '../slices/auth'
import AdminBlog from './AdminBlog/AdminBlog';
import AdminProject from './AdminProject/AdminProject'

import "./adminpage.css"
import AdminTeam from './AdminTeam/AdminTeam';

function AdminPage() {
  const isAuth = useSelector(selectIsAuth)

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/"/>
  }
  
  return (
    <main className='admin-page'>
          <nav className='adminaside'>
            <ul className='adminaside-list'>
              <Link to={`/admin`} className='adminaside-item'>
                project
              </Link>
              <Link to="/admin/blog" className='adminaside-item'>
                blog
              </Link>
              <Link to="/admin/team" className='adminaside-item'>
                team
              </Link>
            </ul>
          </nav>
          <div className='adminaside-line'></div>

          <Routes>
            <Route path="/" element={<AdminProject />} />
            <Route path="/blog" element={<AdminBlog />} />
            <Route path="/team" element={<AdminTeam />} />
          </Routes>
    </main>
  )
}

export default AdminPage
