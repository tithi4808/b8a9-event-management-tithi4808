import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Serve = () => {

    useEffect(() => {
        AOS.init({
          duration: 600,
          delay: 50,
          
          
        });
      }, [])
    return (
        <div className='rounded-lg'>
           <div className=' mt-10 lg:grid grid-cols-2   bg-slate-200 mx-6 mb-10'>
           <div className='bg-sky-100 p-16 ' >
           <p className='font-bold text-3xl text-center lg:text-start mb-4 mt-8' data-aos="fade-up">What We Do?</p>
           
          <ul className='list-disc  lg:text-start'>
            <li data-aos="fade-up">We specialize in planning and executing social events of all types and sizes, including weddings, birthday parties, corporate events, and more.</li>
            <li data-aos="fade-up">Our team of experienced event planners works closely with clients to understand their vision and preferences, and then creates a customized plan to bring that vision to life.</li>
            <li data-aos="fade-up">We handle all aspects of event planning, from venue selection and vendor management to catering, entertainment, and decor.</li>
            <li data-aos="fade-up">Our goal is to create a seamless and stress-free event planning experience for our clients, while delivering a memorable and enjoyable event for their guests.</li>
            <li data-aos="fade-up">We pride ourselves on our attention to detail, creativity, and professionalism, and are committed to exceeding our clients' expectations every step of the way.</li>
          </ul>
           
           
           </div>
           <div className=''>
                <img src="https://i.ibb.co/qN3KVhq/photo-1552664730-d307ca884978.jpg" alt="" />
            </div>
        </div> 
        </div>
    );
};

export default Serve;