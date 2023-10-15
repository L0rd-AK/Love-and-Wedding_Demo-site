import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
const Test = () => {
    const [image, setImg] = useState([]);
    useEffect(()=>{
        fetch('/imgs.json')
        .then((res)=>res.json())
        .then((data)=>setImg(data));
    },[])
    console.log(image);
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
                <Marquee direction={'right'}>
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

export default Test;