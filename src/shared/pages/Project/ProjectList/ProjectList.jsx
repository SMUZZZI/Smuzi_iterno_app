import React from 'react'
import "./projectlist.css"
import ProjectListItem from './ProjectListItem/ProjectListItem';

function ProjectList({ currentPosts }) {
    return (
        <section className='projectlist'>
                <ProjectListItem data={currentPosts} />
        </section>
    )

}

export default ProjectList
