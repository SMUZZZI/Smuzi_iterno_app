import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom';
import { selectIsAuth } from '../slices/auth'

import "./adminpage.css"
import AdminProject from './AdminProject/AdminProject'

function AdminPage() {
  const Auth = useSelector(selectIsAuth)
  const isAuth = Auth.status === true;


  return (
    <main className='admin-page'>
      {
        isAuth ?
          <div>No Permission</div>
          :
          <>
            <aside className='adminaside'>
              <ul className='adminaside-list'>
                <Link to="/admin/project" className='adminaside-item'>
                  project
                </Link>
                <Link to="/admin/blog" className='adminaside-item'>
                  blog
                </Link>
                <Link to="/admin/team" className='adminaside-item'>
                  team
                </Link>
              </ul>
            </aside>

          {/* /////////////// */}

            <section>
              <Routes>
                <Route path="/project" element={<AdminProject />} />
              </Routes>
            </section>
          </>
      }
    </main>
  )
}

export default AdminPage
