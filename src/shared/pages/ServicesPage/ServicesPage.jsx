import React from 'react'
import "./servicespage.css"
import Banner from '../subPages/Banner/Banner';
import ServicesService from './ServicesService/ServicesService';
import Contact from "../subPages/Contact/Contact";

//banner background image
import backgroundImg from "./img/servicebanner.jpg"
import HowWeWork from './HowWeWork/HowWeWork';
const background={
    name: "Services",
    tag: "Home / Services",
    img: backgroundImg,
}

function ServicesPage() {
  return (
    <main className='servicespage'>
        <Banner background={background}/>
        <ServicesService />
        <HowWeWork />
        <Contact />
    </main>
  )
}

export default ServicesPage
