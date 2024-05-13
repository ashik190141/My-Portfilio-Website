/* eslint-disable react/no-unescaped-entities */
import React from "../../public/skills/react.jpg";
import Next from "../../public/skills/Next.jpg";
import Mongoose from "../../public/skills/mongoose.jfif";
import JavaScript from "../../public/skills/javascript.jpg";
import TypeScript from "../../public/skills/TypeScript.png";
import { useState } from 'react';
import { useEffect } from 'react';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/blogs")
        .then(res => res.json())
        .then(data => setBlog(data));
    },[])
    return (
      <div>
        <div className="max-w-6xl mx-auto flex flex-col gap-5 my-20">
          {/* <p className="text-white">{blog[0]?.name}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: blog[0]?.content,
            }}
          ></p> */}
          {/* React */}
          {blog?.map((blog) => (
            <div key={blog._id}>
              <div className="grid grid-cols-3 bg-base-100 shadow-xl items-center rounded-r-md">
                <figure className=" w-full">
                  <img src={blog?.image} alt="Movie" />
                </figure>
                <div className="col-span-2 mx-5 place-content-center">
                  <h2 className="card-title py-1">{blog.name}</h2>
                  <p
                    className="text-justify"
                    dangerouslySetInnerHTML={{
                      __html: blog?.content
                    }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Blog;