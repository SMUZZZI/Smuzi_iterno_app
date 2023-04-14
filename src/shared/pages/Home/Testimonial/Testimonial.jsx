import React from "react";
import "./testimonial.css";
import TestimonialItem from "./TestimonialItem/TestimonialItem";

const Users = [
    {photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name: "Nattasha Mith", location: "Sydney, USA", comment: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."},
    {photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name: "Raymond Galario", location: "Sydney, Australia", comment: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been. Lorem Ipsum is"},
    {photo: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name: "Benny Roll", location: "Sydney, New York", comment: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."},
]

function Testimonial(){
    return(
        <section className="testimonial">
            <h2 className="testimonial-title title-h2-small">What the People Thinks About Us</h2>
            <ul className="testimonial-list">
            <TestimonialItem Users={Users[0]} key={Users[0].name}/>
            <TestimonialItem Users={Users[1]} key={Users[1].name}/>
            <TestimonialItem Users={Users[2]} key={Users[2].name}/>
            </ul>
        </section>
    );
}

export default Testimonial;