import React from "react";
import "./blog.css";
import BlogItem from "./BlogItem/BlogItem";
import Heading from "./Heading/Heading";

function Blog({ blogData }) {
    const data = blogData;

    return (
        <section className="blog">
            <Heading />
            <ul className="blog-content">
                <BlogItem blogCard={data[0]} />
                <BlogItem blogCard={data[1]} />
                <BlogItem blogCard={data[2]} />
            </ul>
        </section>
    );
}

export default Blog;