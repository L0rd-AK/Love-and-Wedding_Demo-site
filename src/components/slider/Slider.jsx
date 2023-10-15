
import Marquee from "react-fast-marquee";
const Slider = () => {

    return (
        <Marquee>
            <div className="mt-16 lg:min-h-screen">
                <div className="carousel rounded-box">
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/HBVcM56/item-1.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/z2nPKSx/item-2.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/PD5Pb66/item-3.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/KVqfNc1/item-4.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/HBVcM56/item-1.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/z2nPKSx/item-2.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/PD5Pb66/item-3.jpg" alt="Burger" />
                    </div>
                </div>
            </div>
        </Marquee>

    );
};

export default Slider;