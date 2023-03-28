import React from 'react'
import "./projectblank.css"

function ProjectBlank({data}) {
    const blank = data;

  return (
    <ul className='ourprojects-blank-content'>
        {
            blank.map(i => (
                <li key={i} className="ourproject-blank">
            <div className="ourproject-blank-img" />
            <div className="ourproject-blank-info-block">
                <div className="ourproject-blank-title-block">
                    <div className="ourproject-blank-title" />
                    <div className="ourproject-blank-p" />
                </div>
                <div className='ourproject-blank-link'/>
            </div>
        </li>
            ))
        }
    </ul>
  )
}

export default ProjectBlank
