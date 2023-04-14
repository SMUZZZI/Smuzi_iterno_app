import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog, fetchBlogLimit } from '../../slices/blog';

import "./blogpage.css"
import Banner from '../subPages/Banner/Banner'
import LastPost from './LastPost/LastPost'
import AllPosts from './AllPosts/AllPosts'
import Pagination from '../subPages/Pagination/Pagination'

import backgroundImg from "./img/blogPageBanner.jpg"

import BlogBlank from '../subPages/BlogBlank/BlogBlank';
import LastPostBlank from './LastPost/LastPostBlank/LastPostBlank';
import Error from '../subPages/Error/Error';
import { paginationSet } from '../../slices/pagination';
import { useNavigate, useParams } from 'react-router-dom';

const background = {
    name: "Articles & News",
    tag: "Home / Blog",
    img: backgroundImg,
}


function BlogPage() {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const blogTotalPosts = useSelector(state => state.blog)

    const blogData = useSelector(state => state.blogLimit)

    const isBlogLoading = blogData.status === "loading";
    const isBlogError = blogData.status === "error";

    const num = useSelector(state => state.pagination)

    const { page } = useParams()

    useEffect(() => {
        navigate(`/blog/${num}`)
    }, [num]);

    //позиционирование экрана
    useEffect(() => {
        window.scrollTo(0, 300);
    }, [isBlogLoading]);

    //переключение страниц
    useEffect(() => {
        //фетчим проекты по пагинации
        dispatch(fetchBlogLimit({ limit: 6, page: num }))
    }, [num]);

    useEffect(() => {
        dispatch(fetchBlogLimit({ limit: 6, page: page || num }))
        dispatch(fetchBlog())
        dispatch(paginationSet(page || 1))
    }, []);

    return (
        <main className='blogpage'>
            <Banner background={background} />
            {
                isBlogError ?
                    <Error errorStatus={"500"} descr={"Не удалось загрузить посты"} />
                    :
                    isBlogLoading ?
                        <div className='main-blank'>
                            <LastPostBlank />
                            <BlogBlank data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
                        </div>
                        :
                        <>
                            <LastPost data={blogData.items[blogData.items.length - 1]} />
                            <AllPosts currentPosts={blogData.items} />
                            <Pagination
                                totalPosts={blogTotalPosts.items.length}
                                currentNum={num}
                                perPage={6}
                            />
                        </>
            }
        </main>
    )
}

export default BlogPage