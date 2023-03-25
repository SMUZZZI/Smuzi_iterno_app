import React from 'react'
import HowWeWorkItem from './HowWeWorkItem/HowWeWorkItem'
import "./howweworkService.css"

import imgOne from "./img/1.jpg"
import imgTwo from "./img/2.jpg"
import imgThree from "./img/3.jpg"
import imgFour from "./img/4.jpg"

import svg1 from "./img/svg1.svg"
import svg2 from "./img/svg2.svg"
import svg3 from "./img/svg3.svg"
import svg4 from "./img/svg4.svg"

function HowWeWork() {
    return (
        <section className='howwework-service'>
            <h2 className='title-h2-small'>How We Work</h2>
            <p className='howwework-service-p p-black'>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <ul className='howwework-service-list'>
                <HowWeWorkItem data={{ title: "Concept & Details", text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.", num: "01", svg: svg1, bg: imgOne }} />
                <HowWeWorkItem data={{ title: "Idea for Work", text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.", num: "02", svg: svg2, bg: imgTwo }} />
                <HowWeWorkItem data={{ title: "Design", text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.", num: "03", svg: svg3, bg: imgThree }} />
                <HowWeWorkItem data={{ title: "Perfection", text: "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.", num: "04", svg: svg4, bg: imgFour }} />
            </ul>
        </section>
    )
}

export default HowWeWork
