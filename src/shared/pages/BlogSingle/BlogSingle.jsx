import React, { useEffect, useState } from 'react'
import axios from "../../actions/axios";
import { useParams } from 'react-router-dom';

import Banner from '../subPages/Banner/Banner'
import "./blogsingle.css"
import BlogSingleMain from './BlogSingleMain/BlogSingleMain'
import DesignSprints from './DesignSprints/DesignSprints'
import LeaveReply from './LeaveReply/LeaveReply'
import BlogSingleAside from './BlogSingleAside/BlogSingleAside'


import backgroundImg from "./img/blogSingleBanner.jpg"
const background = {
  name: "Blog Details",
  tag: "Home / Blog / Details",
  img: backgroundImg,
}


function BlogSingle() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/blog/${id}`)
      .then(res => {
        setData(res);
        setIsLoading(false)
      })
      .catch(err => {
        console.warn(err);
        alert("Ошибка при получении блога")
      })
  }, []);

  return (
    <main className='blogsingle'>
      <Banner background={background} />
      {
        isLoading ?
          <div>Loading...</div>
          :
          <>
            <div className='blogsingle-container'>
              <article className='blogsingle-content'>
                <BlogSingleMain data={data.data} />
                <div className='blogsingle-quote'>
                  <h2 className='blogsingle-quote-sign'>“</h2>
                  <h3 className='blogsingle-quote-p'>The details are not the details.
                    They make the design.</h3>
                </div>
                <DesignSprints Data={data.data} />
                <LeaveReply />
              </article>
              <aside className='blogsingle-nav'>
                <BlogSingleAside Tags={data.data.tag}/>
              </aside>
            </div>
          </>
      }
    </main>
  )
}

export default BlogSingle