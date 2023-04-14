import React from "react";
import OurProjectItem from "./OurProjectItem/OurProjectItem";
import "./ourprojects.css";

 
function OurProjects(ourProjects){
    const data = ourProjects.ourProjects;
    return(
        <section className="outprojects">
            <h2 className="ourprojects-title title-h2-small">Follow Our Projects</h2>
            <p className="ourprojects-main-p p-black-gray">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            <ul className="ourprojects-content">
            <OurProjectItem key={data.id} data={data[0]}/>
            <OurProjectItem key={data.id} data={data[1]}/>
            <OurProjectItem key={data.id} data={data[2]}/>
            <OurProjectItem key={data.id} data={data[3]}/>
            </ul>
        </section>
    );
}

export default OurProjects;