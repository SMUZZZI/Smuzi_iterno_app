import React from "react";
import "./testimonialItem.css";

function TestimonialItem({ Users }) {
    return (
        <li className="testimonial-Item">
            <div className="testimonial-Item-content">
                <div className="person">
                    <img src={Users.photo} className="person-photo" />
                    <div className="person-info">
                        <h3 className="title-h3-small testimonial-Item-person-title">{Users.name}</h3>
                        <p className="person-location">{Users.location}</p>
                    </div>
                </div>
                <p className="p-black-gray testimonial-Item-p">{Users.comment}</p>
            </div>
        </li>
    );
}

export default TestimonialItem;