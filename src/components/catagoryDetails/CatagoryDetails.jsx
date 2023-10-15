import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Blog from "../Blog/Blog";

const CatagoryDetails = () => {
    const [catagory, SetCatagory] = useState([]);
    const [object, SetObject] = useState([]);

    const [blog, SetBlogs] = useState([]);
    const dat = useLoaderData();
    const { id } = useParams();
    // console.log(id);
    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => SetCatagory(data));
        SetBlogs(dat);
        catagory.map(i => {
            if (i.id == id) {
                SetObject(i);
            }
        });
    }, [dat, catagory, id])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
                <div className="col-span-3">
                    <div className="p-10">
                        <img src={object.image} alt="" />
                        <h1 className="text-4xl text-black mb-5">{object.event}</h1>
                        <h3 className="text-2xl font-semibold mb-3 text-[#FF635C]">{object.price}</h3>
                        <p className="text-black">{object.description}</p>
                        {/* form-1 */}
                        <Link to='/about-us/#form-1'> <button className="btn  bg-[#FCB41E] hover:bg-transparent border-[#FCB41E] hover:border-black border-2 text-white hover:text-black mt-5">Make a Request</button></Link>
                    </div>
                </div>
                <div className="col-span-1 p-4 mt-2">
                    <h1 className="text-4xl text-black font-bold mb-4">Our Blogs</h1>
                    {
                        blog.map(i => <Blog key={i.id} blog={i}></Blog>)
                    }
                </div>
            </div>
            {/* --------------------------- */}
            
        </div>
    );
};

export default CatagoryDetails;