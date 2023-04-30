import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeam, fetchDeleteTeam } from '../../slices/team';


import "../AdminProject/adminproject.css"
import { Link } from 'react-router-dom';
import Error from '../../pages/subPages/Error/Error';

function AdminTeam() {

  const dispatch = useDispatch()

  const teamData = useSelector(state => state.team)
  const isTeamLoading = teamData.status === "loading";
  const isTeamError = teamData.status === "error";

  const [reload, setReload] = useState(false)

  useEffect(() => {
    dispatch(fetchTeam())
    setReload(false)
  }, [reload]);

  function deleteItem(id) {
    if (window.confirm("Вы действительно хотите удалить?"))
      dispatch(fetchDeleteTeam(id))
  }

  return (

    <section className='adminproject'>
      {
        isTeamError ?
          <Error errorStatus={"500"} descr={"Не удалось загрузить"} />
          :
          isTeamLoading ?
            <div className="loader-container">
              <span class="loader"></span>
            </div>
            :
            <>
              <section className='adminproject-add'>
                <Link to="/admin/team/new" className='btn adminproject-add-btn'>Create team
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 38L44 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M29 41L26 44" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M38.5 44H26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </Link>
              </section>
              <ul className='adminproject-list'>
                {
                  teamData.items.map(i => (
                    <li key={i._id} className="adminproject-item">
                      <img src={`http://45.146.166.237:5000${i.img}`} alt={`img ${i._id}`} className="adminproject-img" />
                      <h2 className='adminproject-title title-h3'>{i.name.slice(0, 20)}...</h2>
                      <div className='adminproject-link-block'>
                        <p className='adminproject-id p-black-gray'>{i._id}</p>
                        <div>
                          <Link to={`/admin/team/${i._id}/edit`} className="adminproject-btn">
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

export default AdminTeam
