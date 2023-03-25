import React from 'react'

import "./projectdetailstextblock.css"

function ProjectDetailsTextBlock({ data }) {

    return (
        <section className='projectDetailsTextBlock'>
            <ul className='projectDetailsList'>
                <li className='projectDetailsInfoItem'>
                    <ul className='projectDetailsInfoItemBlock'>
                        <li className='projectDetailsInfoTitleItem'>
                            <h3 className='p-black-gray'>Client</h3>
                        </li>
                        <li className='projectDetailsInfoTitleItem'>
                            <h3 className='p-black-gray'>Category</h3>
                        </li>
                        <li className='projectDetailsInfoTitleItem'>
                            <h3 className='p-black-gray'>Tags</h3>
                        </li>
                        <li className='projectDetailsInfoTitleItem'>
                            <h3 className='p-black-gray'>Date</h3>
                        </li>
                        <li className='projectDetailsInfoTitleItem'>
                            <h3 className='p-black-gray'>Link</h3>
                        </li>
                    </ul>
                    <ul className='projectDetailsInfoItemBlock'>
                        <li className='projectDetailsInfoTitleItem'>
                            <p className='p-black-gray'>{data.client}</p>
                        </li>
                        <li className='projectDetailsInfoTitleItem'>
                            <p className='p-black-gray'>{data.category}</p>
                        </li>
                        <li className='projectDetailsInfoTitleItem'>
                            <p className='p-black-gray'>{data.tags}</p>
                        </li>
                        <li className='projectDetailsInfoTitleItem'>
                            <p className='p-black-gray'>{data.updatedAt.slice(0, 10)}</p>
                        </li>
                        <li className='projectDetailsInfoTitleItem'>
                            <a href={data.link} className='projectDetailsInfoItemLink'>
                                <p className='p-black-gray'>{data.link}</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='projectDetailsTextItem'>
                    <h2 className='projectDetailsTextItemTitle title-h2-small'>{data.mainTitle}</h2>
                    <p className='p-black-gray'>{data.mainText}</p>
                </li>
            </ul>
        </section>
    )
}

export default ProjectDetailsTextBlock