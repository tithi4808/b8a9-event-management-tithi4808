import { useLoaderData, useParams } from "react-router-dom";


const Blogdetails = () => {
    const {id}=useParams()
    console.log(id)
    const blogs=useLoaderData()
    
    const blog=blogs.find(blog=>blog.id==id)
    
    
    return (
        <div className="flex flex-col lg:mx-40">
            <img className="h-60 w-full" src={blog.image} alt="" />
            <h2 className="mt-6 mb-4 text-3xl font-bold text-center">{blog.title}</h2>
            <p className="mb-6 font-semibold text-center">Published date : {blog.date}</p>
            <p className="text-center mb-10">{blog.large_description
            }</p>
        </div>
    );
};

export default Blogdetails;