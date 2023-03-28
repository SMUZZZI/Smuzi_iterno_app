import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from '../../slices/blog';

import "./blogpage.css"
import Banner from '../subPages/Banner/Banner'
import LastPost from './LastPost/LastPost'
import AllPosts from './AllPosts/AllPosts'
import Pagination from '../subPages/Pagination/Pagination'

import backgroundImg from "./img/blogPageBanner.jpg"
import BlogBlank from '../subPages/BlogBlank/BlogBlank';
import LastPostBlank from './LastPost/LastPostBlank/LastPostBlank';

const background = {
    name: "Articles & News",
    tag: "Home / Blog",
    img: backgroundImg,
}


function BlogPage() {

    const dispath = useDispatch()
    const blogData = useSelector(state => state.blog)
    const isBlogLoading = blogData.status === "loading" | "error";

    useEffect(() => {
        dispath(fetchBlog())
    }, []);

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);

    const paginate = (pageNum) => {
        setCurrentPage(pageNum);
        window.scrollTo(0, 650);
    }

    return (
        <main className='blogpage'>
            <Banner background={background} />
            {
                isBlogLoading ?
                <div className='main-blank'>
                    <LastPostBlank />
                    <BlogBlank data={[1,2,3,4,5,6,7,8,9]} />
                </div>
                    :
                    <>
                        <LastPost data={blogData.items[blogData.items.length - 1]} />
                        <AllPosts
                            data={blogData.items}
                            postsData={{
                                posts,
                                currentPage,
                                postPerPage,
                                setPosts
                            }} />
                        <Pagination
                            postPerPage={postPerPage}
                            totalPosts={blogData.items.length}
                            paginate={paginate}
                        />
                    </>
            }
        </main>
    )
}

export default BlogPage