import PropTypes from 'prop-types';
import Catagory from '../catagory/Catagory';

const Catagories = ({catagory}) => {
    return (
        <div className='mx-10 md:mx-40 mb-16'>
            <h1 className='text-[#FCB41E] text-3xl font-bold text-center md:text-5xl mb-10'>Our Services</h1>
           <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    catagory.map(i=> <Catagory key={i.id} catagory={i}></Catagory>)
                }
           </div>
        </div>
    );
};
Catagories.propTypes = {
    catagory: PropTypes.array,
};
export default Catagories;