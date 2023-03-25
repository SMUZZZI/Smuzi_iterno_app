import React, { useEffect } from 'react'
import "./projectlist.css"
import ProjectListItem from './ProjectListItem/ProjectListItem';

function ProjectList({ data, postsData }) {

    const posts = postsData.posts;
    const currentPage = postsData.currentPage;
    const postPerPage = postsData.postPerPage;

    const setPosts = postsData.setPosts;
    useEffect(() => {
        setPosts(data);
    })
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const resultPosts = [
        { data: currentPosts.slice(0, 4) },
        { data: currentPosts.slice(4) }
    ]

    return (
        <section className='projectlist'>
            <div className='projectlist-block'>
                <ProjectListItem data={resultPosts[0].data} />
                <ProjectListItem data={resultPosts[1].data} />
            </div>
        </section>
    )

}

export default ProjectList
