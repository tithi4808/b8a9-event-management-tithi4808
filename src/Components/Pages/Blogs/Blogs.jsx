import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Blog from './Blog/Blog';

const Blogs = () => {
    const blogs=useLoaderData()
    
    
    return (
        <div className='md:mx-20 mb-20 lg:mx-40' >
           <div className='flex justify-center mt-10 '>
           <h2 className='font-bold text-3xl text center '>Our Blogs</h2>
           </div>
            
            <div className='space-y-6'>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>

            </div>
        
    );
};

export default Blogs;