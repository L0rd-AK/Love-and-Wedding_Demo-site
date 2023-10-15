
const AboutUs = () => {
    return (
        <div className="mx-10 md:mx-40 md:mt-40 overflow-x-hidden">
            <div className="mx-auto">
                <div className="mt-10 gap-10">
                <div className="grid mb-5 grid-cols-1 md:grid-cols-2 md:gap-10">
                    <div data-aos="fade-right" data-aos-offset="300" className="mb-5">
                        <img className="w-full h-screen" src="https://i.ibb.co/RD16pCF/about-us.jpg" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <div>
                        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-6xl md:text-7xl monalisa mb-4">About Us</h1>
                        <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-2xl md:text-4xl mb-3 text-black font-semibold">We Are The Best Wedding Planner & Decor.</h2>
                        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-black">We Are The Best Wedding Planner & Decorator, And is a title that exudes confidence and expertise in the field of wedding planning and decoration services. This business or service provider is positioning themselves as the ultimate choice for couples looking to create a memorable and spectacular wedding day.</p>
                        <button data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="mt-5 btn px-10 py-3 bg-[#CA9D8F] text-white font-bold border-none">APPOINMENT</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1  md:grid-cols-2 md:gap-10">
                    <div className="flex justify-center items-center order-2 md:order-1 ">
                        <div>
                            <h1 data-aos="fade-up"  data-aos-anchor-placement="top-bottom" className="text-6xl md:text-7xl monalisa mb-4">Our Story</h1>
                            <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-2xl md:text-4xl mb-3 text-black font-semibold">Our Company Has a Great Mission & Policy</h2>
                            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="text-black">Convallis gravida odio viverra nisi, aliquam sem netus. Sed at semper at lacus. Nam integer nunc pellentesque nunc pulvinar donec scelerisque. </p>
                            <button data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=" mt-5 btn px-10 py-3 bg-[#CA9D8F] text-white font-bold border-none">Contact Us</button>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-offset="300" className="order-1 md:order-2 mb-5">
                        <img className="w-full h-screen" src="https://i.ibb.co/0CSJSXR/contact.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;