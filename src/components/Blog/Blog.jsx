import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {image,date,title}=blog;
    return (
        <div className='flex gap-5 mb-4'>
            <div className=''>
                <img className='w-full' src={image} alt="" />
                <h1 className='md:text-xl text-black font-bold'>{title}</h1>
                <p  className='text-base text-black'>{date}</p>
            </div>
            <div>
                
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object
};
export default Blog;