import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Catagory = ({catagory}) => {
    const {id,image,event,description,price}=catagory;
    return (
        <div className='mb-5 gap-5'>
            <div className="card md:h-80  shadow-xl image-full text-center ">
                <figure><img  src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl text-white font-bold text-center">{event}</h2>
                    <h2 className="text-xl text-[#FF635C] font-bold">{price}</h2>
                    <p className='text-white'>{description}</p>
                    <div className="card-actions justify-center">
                    <Link to={`/catagory-details/${id}`}><button className="btn  bg-[#FCB41E] text-white  border-none">More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
Catagory.propTypes = {
    catagory: PropTypes.object,
};
export default Catagory;