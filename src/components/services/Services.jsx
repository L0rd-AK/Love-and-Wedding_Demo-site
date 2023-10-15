import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Catagories from "../catagories/Catagories";
import Blog from "../Blog/Blog";
import TestRight from "../test/TestRight";
import TestLeft from "../test/TestLeft";

const Services = () => {
    const [blog,SetBlogs]=useState([]);
    const [catagory,SetCatagory]=useState([]);
    const data=useLoaderData();
    console.log(data);
    useEffect(()=>{
        fetch('/blogs.json')
        .then((res)=>res.json())
        .then((dt)=>SetBlogs(dt));
        SetCatagory(data);
    },[data])
    return (
        <div className="mt-20">
            <div >
                <Catagories catagory={catagory}></Catagories>
            </div>
            <div className=" p-4 mt-2 ">
                <div> <TestRight></TestRight> </div>
                <h1 className="text-4xl text-black font-bold mb-4">Our Blogs</h1>
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {
                        blog.map(i=> <Blog key={i.id} blog={i}></Blog>)
                    }
                </div>
                <div> <TestLeft></TestLeft> </div>
            </div>
            
        </div>
 
    );
};

export default Services;