import React from 'react'
import "./projectblank.css"

function ProjectBlank({data}) {
    const blank = data;

  return (
    <ul className='ourprojects-blank-content'>
        {
            blank.map(i => (
                <li key={i} className="ourproject-blank">
            <div className="ourproject-blank-img gradient" />
            <div className="ourproject-blank-info-block">
                <div className="ourproject-blank-title-block">
                    <div className="ourproject-blank-title gradient" />
                    <div className="ourproject-blank-p gradient" />
                </div>
                <div className='ourproject-blank-link gradient'/>
            </div>
        </li>
            ))
        }
    </ul>
  )
}

export default ProjectBlank
