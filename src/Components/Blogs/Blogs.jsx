import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';

export default function Blogs({handleAddBookMarks,handleReadTime}) {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='md:w-2/3'>
            <h1>Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} handleReadTime={handleReadTime} handleAddBookMarks={handleAddBookMarks} blog={blog}></Blog>)
            }
        </div>
    )
}
