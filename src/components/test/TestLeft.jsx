import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const TestLeft = () => {
    const [image, setImg] = useState([]);
    useEffect(()=>{
        fetch('/imgs.json')
        .then((res)=>res.json())
        .then((data)=>setImg(data));
    },[])
    return (
        <div className='flex'>
            <div className='grid gap-5'>
                <Marquee>
                    {image.map((item) => (
                    <div key={item} className='rounded h-10 w-full'>
                    <img className='w-full h-40' src={item.img} alt="" />
                    </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TestLeft;