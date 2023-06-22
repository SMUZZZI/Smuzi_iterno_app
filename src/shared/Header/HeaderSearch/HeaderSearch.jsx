import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlog } from '../../slices/blog'
import { fetchProject } from '../../slices/project'
import { Link } from 'react-router-dom'
import './headersearch.css'
import { searchSet } from '../../slices/search'



function searchData(searchWord, data) {
    if (!searchWord) {
        return
    }
    const result = []
    for (let i = 0; i < data.length; i++) {
        let item = data[i]
        if (item.title.toLowerCase().includes(searchWord.toLowerCase()))
            result.push(item)
    }
    return result
}


function HeaderSearch() {
    const dispath = useDispatch()

    const blogData = useSelector(state => state.blog)
    const projectData = useSelector(state => state.project)
    useEffect(() => {
        dispath(fetchBlog())
        dispath(fetchProject())
    }, []);

    const [data, setData] = useState([])
    const [searchWord, setSearchWord] = useState('')

    useEffect(() => {
        const timeOut = setTimeout(() => {
            const filtredData = searchData(searchWord, [...blogData.items, ...projectData.items])
            setData(filtredData)
        }, 300)
        return () => clearTimeout(timeOut)
    }, [searchWord])

    return (
        <section className='headersearch'>
            <form>
                <input type="text" placeholder='Search' className='headersearch-input' value={searchWord} onChange={e => setSearchWord(e.target.value)} />

            </form>
            <Link to='/search'>
                <button className='headersearch-btn' onClick={() => {
                    dispath(searchSet(data))
                    setSearchWord('')
                }}>
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.8">
                            <path d="M16.6837 17.1844L21.9994 22.5001M19.375 10.6875C19.375 15.7616 15.2616 19.875 10.1875 19.875C5.11338 19.875 1 15.7616 1 10.6875C1 5.61338 5.11338 1.5 10.1875 1.5C15.2616 1.5 19.375 5.61338 19.375 10.6875Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </button>
            </Link>
            <ul className={`headersearch-list ${Array.isArray(data) && data.length != 0 && 'headersearch-list-active'}`}>
                {
                    data != null ?
                        data.slice(0, 10).map(item => (
                            item.projectid ?
                                <li key={item._id} className='headersearch-item'>
                                    <Link to={`/project/id=/${item._id}`} onClick={() => setSearchWord('')}>{item.title.slice(0, 25)}...</Link>
                                </li>
                                :
                                <li key={item._id} className='headersearch-item'>
                                    <Link to={`/blog/id=/${item._id}`} onClick={() => setSearchWord('')}>{item.title.slice(0, 25)}...</Link>
                                </li>
                        ))
                        :
                        null

                }
            </ul>
        </section>
    )
}

export default HeaderSearch
