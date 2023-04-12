import React, { useState } from 'react'
import "./teambiography.css"


function TeamBiography({ data }) {
    const qnaItems = data.data.qnaData;
    const qnaResult = [];

    const [currentItem, setCurrentItem] = useState(0);

    for (let i = 0; i < qnaItems.length; i++) {
        qnaResult.push(
            <li key={i} className={`teambiography-qna-item ${currentItem === i && "teambiography-qna-item-open"}`}
                onClick={() => {
                    setCurrentItem(prev => i);
                }}
            >
                <div className='teambiography-qna-item-title-block'>
                    <h3 className='teambiography-qna-item-title'>{qnaItems[i].title}</h3>
                    <div className='teambiography-qna-item-icon'>
                        <span className='teambiography-qna-item-icon-line'></span>
                        <span className='teambiography-qna-item-icon-line'></span>
                    </div>
                </div>
                <p className='teambiography-qna-item-p p-black-gray'>
                    {qnaItems[i].text}
                </p>
            </li>
        )
    }

    return (
        <section className='teambiography'>
            <h2 className='teambiography-title title-h2-small'>Short Biography</h2>
            <p className='teambiography-biography '>{data.biography}</p>
            <div className='teambiography-qna'>
                <h3 className='teambiography-qna-title title-h3'>Qustion And Answer</h3>
                <p className='teambiography-qna-p p-black-gray'>{data.qnaDis}</p>
                <ul className='teambiography-qna-list'>
                    {qnaResult}
                </ul>
            </div>
        </section>
    )
}

export default TeamBiography
