import PropTypes from 'prop-types'; // ES6
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddBookMarks,handleReadTime }) => {
    const { title, cover, reading_time, posted_date, author, author_img, hashtags } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4S'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddBookMarks(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
           
            <button onClick={()=>handleReadTime((reading_time))} className='block text-left text-blue-500 hover:underline'>Mark as read</button>
            
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}