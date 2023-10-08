import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceDetails = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 50,
          
          
        });
      }, [])

    const {id}=useParams()
    
    const details=useLoaderData()
    
    const detail=details.find(detail_id=>detail_id.id==id)
    


    return (
        <div>
            <div  className=' bg-sky-100 flex  rounded-xl flex-col-reverse  lg:gap-10 justify-center items-center lg:mx-20 lg:flex-row-reverse  justify-end  mt-10'>
            <div className='rounded-3xl'>
            <img data-aos="fade-left" className='w-full h-60 py-8 '  src={detail.image} alt="" />
            </div>
            
            <div className='  rounded-xl py-20' data-aos="fade-right">
            <h3 className='text-3xl font-bold text-center' >International Event Management </h3>
            <p className='text-center mt-2 font-medium'>For {detail.name}</p>
            </div>
            
           

            
            </div>

           <div className='mt-20' data-aos="fade-up">
            <h3 className='text-3xl text-center font-semibold'>
                Gallery
            </h3>
           <div className='mx-8 md:grid-cols-3 lg:mx-44 mb-20 mt-6 grid gap-4 lg:grid-cols-3'>
                <img className='h-60 w-96' src={detail.image1} alt="" />
                <img className='h-60 w-96' src={detail.image2} alt="" />
                <img className='h-60 w-96' src={detail.image3} alt="" />
            </div>
           </div>

            <div className='grid gap-2 mb-10 md:grid-cols-2 lg:mx-40'>
                <div className='flex flex-col items-center justify-center' data-aos="fade-right">
                <h2 className='font-bold text-3xl text-center mb-4'>
                    {detail.descriptions[0].title}
                </h2>
                <p className='text-center'>{detail.descriptions[0].description}</p>
                <div className='flex justify-center mt-4'>
                <button className='btn bg-sky-300 text-white text-center'>Read More</button>
                </div>
                </div>
                <img data-aos="fade-left" className='h-72 w-full' src={detail.descriptions[0].image} alt="" />
                
            </div>

            <div className='flex gap-2 mb-10 flex-col-reverse md:flex-row lg:mx-40' >
            <img data-aos="fade-right" className='h-72 flex-1 w-full' src={detail.descriptions[1].image} alt="" />
            <div data-aos="fade-left" className='flex md:flex-1 flex-col items-center justify-center'>
            <h2 className='font-bold text-3xl text-center mb-4'>
            {detail.descriptions[1].title}
                </h2>
                <p className='text-center'>{detail.descriptions[1].description}</p>
                
                <div className='flex justify-center mt-4'>
                <button className='btn bg-sky-300 text-white text-center'>Read More</button>
            </div>
            </div>
            </div>

            <div className='grid gap-2 mb-10 md:grid-cols-2 lg:mx-40'>
            <div data-aos="fade-right" className='flex flex-col items-center justify-center'>
           <h2 className='font-bold text-3xl text-center mb-4'>
            {detail.descriptions[2].title}
                </h2>
                <p className='text-center'>{detail.descriptions[2].description}</p>
                <div className='flex justify-center mt-4'>
                <button className='btn bg-sky-300 text-white text-center'>Read More</button>
           </div>
           </div>
                
                <img data-aos="fade-left" className='h-72 w-full' src={detail.descriptions[2].image} alt="" />
                
                
            
            </div>
            <div  className='flex gap-2 mb-10 flex-col-reverse md:flex-row lg:mx-40'>
            <img data-aos="fade-right" className='h-72 flex-1 w-full' src={detail.descriptions[3].image} alt="" />
            <div data-aos="fade-left" className='flex flex-1 flex-col items-center justify-center'><h2 className='font-bold text-3xl text-center mb-4'>
            {detail.descriptions[3].title}
                </h2>
                <p className='text-center'>{detail.descriptions[3].description}</p>
                
                <div className='flex justify-center mt-4'>
                <button className='btn bg-sky-300 text-white text-center'>Read More</button>
            </div>
                
            
            </div>
        
        </div>
        </div>
    );
};

export default ServiceDetails;