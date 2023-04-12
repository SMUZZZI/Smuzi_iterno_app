import React from 'react'
import "./projectlist.css"
import ProjectListItem from './ProjectListItem/ProjectListItem';

function ProjectList({ currentPosts }) {
    return (
        <section className='projectlist'>
            <div className='projectlist-block'>
                <ProjectListItem data={currentPosts} />
            </div>
        </section>
    )

}

export default ProjectList
