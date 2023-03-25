import React from 'react'
import "./designsprints.css"


function DesignSprints({Data}) {

    const data = Data;
    const items = data.list;
    const ulResult = [];

    for (let i = 0; i < items.length; i++) {
        ulResult.push(
            <li key={i} className="designsprints-list-item">
                <p className='designsprints-list-item-num'>{i + 1}</p>
                <p className='p-black-gray'>{items[i]}</p>
            </li>
        )
    }

  return (
    <section className='designsprints'>
        <h2 className='designsprints-title title-h2-small'>Design sprints are great</h2>
        <p className='p-black-gray'>{data.maintext}</p>
        <ul className='designsprints-list'>
            {ulResult}
        </ul>
        <div className='designsprints-img-block'>
            <img src={data.img} className="designsprints-img"/>
        </div>
        <p className='p-black-gray'>{data.secondtext}</p>
    </section>
  )
}

export default DesignSprints