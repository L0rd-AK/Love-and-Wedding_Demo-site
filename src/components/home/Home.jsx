// import Navbar from "../navbar/Navbar";

import { useEffect, useState } from "react";
import AboutUs from "../about_us/AboutUs";
import Catagory from "../catagories/Catagories";
import Event_planning from "../event_planning/Event_planning";
import Slider from "../slider/Slider";
import { useLoaderData } from "react-router-dom";
import Gallary from "../gallary/Gallary";


const Home = () => {
    const [catagory,SetCatagory]=useState([]);
    const data=useLoaderData();
    useEffect(()=>{
        SetCatagory(data);
    },[data])
    return (
        <>
            <Slider></Slider>
            <AboutUs></AboutUs>
            <Event_planning></Event_planning>
            <Gallary></Gallary>
            <Catagory catagory={catagory}></Catagory>
        </>
    );
};

export default Home;