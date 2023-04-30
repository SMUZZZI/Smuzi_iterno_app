import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteProject, fetchProject } from '../../slices/project';


import "./adminproject.css"
import { Link } from 'react-router-dom';
import Error from '../../pages/subPages/Error/Error';

function AdminProject() {

  const dispatch = useDispatch()

  const projectData = useSelector(state => state.project)
  const isProjectLoading = projectData.status === "loading";
  const isProjectError = projectData.status === "error";

  const [reload, setReload] = useState(false)

  useEffect(() => {
    dispatch(fetchProject())
    setReload(false)
  }, [reload]);

  function deleteItem(id) {
    if (window.confirm("Вы действительно хотите удалить проект?"))
      dispatch(fetchDeleteProject(id))
  }

  return (

    <section className='adminproject'>
      {
        isProjectError ?
          <Error errorStatus={"500"} descr={"Не удалось загрузить проекты"} />
          :
          isProjectLoading ?
            <div className="loader-container">
              <span class="loader"></span>
            </div>
            :
            <>
              <section className='adminproject-add'>
                <Link to="/admin/project/new" className='btn adminproject-add-btn'>Create project
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 38L44 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M29 41L26 44" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M38.5 44H26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </Link>
              </section>
              <ul className='adminproject-list'>
                {
                  projectData.items.map(i => (
                    <li key={i._id} className="adminproject-item">
                      <img src={`http://45.146.166.237:5000${i.img}`} alt={`img ${i._id}`} className="adminproject-img" />
                      <h2 className='adminproject-title title-h3'>{i.title}</h2>
                      <p className='adminproject-id p-black-gray'>{i.projectid}</p>
                      <div className='adminproject-link-block'>
                        <p className='adminproject-id p-black-gray'>{i._id}</p>
                        <div>
                          <Link to={`/admin/project/${i._id}/edit`} className="adminproject-btn">
                            <svg width="52" height="52" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="35" cy="35" r="35" fill="currentColor" />
                              <path d="M32 38L44 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                              <path d="M29 41L26 44" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                              <path d="M38.5 44H26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                          </Link>
                          <button onClick={() => { deleteItem(i._id); setReload(true) }} className="adminproject-btn">
                            <svg width="52" height="52" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="35" cy="35" r="35" fill="currentColor" />
                              <path d="M26 44L35 35L26 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M44 26L35 35L44 44" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </>
      }
    </section>
  )
}

export default AdminProject
