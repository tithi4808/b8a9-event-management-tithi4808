import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = ({blog}) => {
    const {title,date,description,image,id}=blog
    return (
        <div className='flex flex-col justify-center items-center text-center py-4 md:px-6 rounded-lg bg-sky-50 md:text-start  md:flex-row  border-2 mt-10'>
                <img className='w-1/3 mr-6 rounded-lg' src={image} alt="" />
                <div className='w-2/3 space-y-2'>
                    <h3 className='text-2xl'>{title}</h3>
                    <p>Published:<span>{date}</span></p>
                    <p>Author: admin</p>
                    <p>
                        {description} 
                            <span className='text-sky-400 ml-2'><NavLink to={`/blogdetails/${id}`} >Read More...</NavLink></span>
                    </p>
                </div>
                </div>
    );
};

export default Blog;