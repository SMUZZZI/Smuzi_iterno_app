import React from 'react'
import "./blogsinglemain.css"


function BlogSingleMain({ data }) {
  return (
    <section className='blogsinglemain'>
      <h2 className='title-h2-small blogsinglemain-title'>{data.title}</h2>
      <div className='blogsinglemain-img-block'>
        <img src={`http://localhost:5000${data.img}`} className="blogsinglemain-img" />
      </div>
      <div className='blogsinglemain-tags'>
        <p className='blogsinglemain-tag-p'>{data.updatedAt.slice(0, 10)}</p>
        <p className='blogsinglemain-tag-p'>{data.tag}</p>
      </div>
      <p className='p-black-gray blogsinglemain-main-p'>{data.text}</p>
    </section>
  )
}

export default BlogSingleMain