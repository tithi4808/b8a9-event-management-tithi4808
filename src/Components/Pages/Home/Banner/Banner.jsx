import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, [])
    return (

      <div className="hero h-80 w-full bg-[url('https://i.ibb.co/880BwGZ/HD-wallpaper-beach-wedding-beach-sea-sky-wedding.jpg')] relative">
        <div className="absolute bg-cyan-50
          bg-opacity-60 inset-0">

        </div>
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div data-aos="fade-up">
      <h1 className="text-5xl font-bold">Exclusive Events!!</h1>
      <p className="py-6 font-bold">WE ARE A CREATIVE-LED EXPERIENTIAL EVENT PRODUCTION AGENCY THAT HELPS BRANDS CONNECT, ENGAGE AND EVOLVE.</p>
    </div>
  </div>
</div>
    )
}

export default Banner;