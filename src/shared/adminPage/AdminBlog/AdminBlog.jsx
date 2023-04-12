import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog, fetchDeleteBlog } from '../../slices/blog';


import "../AdminProject/adminproject.css"
import { Link } from 'react-router-dom';
import Error from '../../pages/subPages/Error/Error';

function AdminBlog() {

  const dispatch = useDispatch()

  const blogData = useSelector(state => state.blog)
  const isBlogLoading = blogData.status === "loading";
  const isBlogError = blogData.status === "error";

  const [reload, setReload] = useState(false)

  useEffect(() => {
    dispatch(fetchBlog())
    setReload(false)
  }, [reload]);

  function deleteItem(id) {
    if (window.confirm("Вы действительно хотите удалить проект?"))
      dispatch(fetchDeleteBlog(id))
  }

  return (

    <section className='adminproject'>
      {
        isBlogError ?
          <Error errorStatus={"500"} descr={"Не удалось загрузить проекты"} />
          :
          isBlogLoading ?
            <div className="loader-container">
              <span class="loader"></span>
            </div>
            :
            <>
              <section className='adminproject-add'>
                <Link to="/admin/blog/new" className='btn adminproject-add-btn'>Create blog
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 38L44 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M29 41L26 44" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M38.5 44H26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </Link>
              </section>
              <ul className='adminproject-list'>
                {
                  blogData.items.map(i => (
                    <li key={i._id} className="adminproject-item">
                      <img src={`http://localhost:5000${i.img}`} alt={`img ${i._id}`} className="adminproject-img" />
                      <h2 className='adminproject-title title-h3'>{i.title.slice(0, 20)}...</h2>
                      <div className='adminproject-link-block'>
                        <p className='adminproject-id p-black-gray'>{i._id}</p>
                        <div>
                          <Link to={`/admin/blog/${i._id}/edit`} className="adminproject-btn">
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

export default AdminBlog
