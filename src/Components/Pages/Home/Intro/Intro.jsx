import React from 'react';

const Intro = () => {
    return (
        <div className='mt-10  flex flex-col-reverse md:grid grid-cols-2 rounded-lg bg-slate-200 mx-6 mb-10'>
            <div className='grid grid-cols-2 md:grid-cols-1 gap-2 lg:grid-cols-2'>
                <div><img className='h-56 w-96 rounded-lg'  src="https://i.ibb.co/LrHZ8Xk/20211107-Mengjie-Liu-T257.jpg" alt="" /></div>
                <img className='h-56 w-96 rounded-lg' src="https://i.ibb.co/SPV9hWj/greece-wedding-santorini-photosession-10-1920x1080-0c6.jpg" alt="" />
                <img className='h-56 w-96 rounded-lg' src="https://i.ibb.co/Zf154rH/1707.jpg" alt="" />
                <img className='h-56 w-96 rounded-lg' src="https://i.ibb.co/SPn1fDJ/download-1.jpg" alt="" />
            </div>
           <div className='bg-sky-100 p-16 rounded-lg '>
           <p className='font-bold text-3xl text-end mb-4 mt-8'>WELCOME TO WINK EVENT MANAGEMENT</p>
           <p className='text-end'>
           Welcome to our WINK event management website! We are thrilled to offer our services to help you plan and execute your next event. Whether it's a birthday party, wedding,  or any other special occasion, our team of experienced event planners is here to make your vision a reality. From venue selection to catering, entertainment, and decor, we take care of every detail to ensure a seamless and unforgettable experience for you and your guests. Let us take the stress out of event planning and create a memorable event that exceeds your expectations.
           </p>
           </div>
        </div>
    );
};

export default Intro;