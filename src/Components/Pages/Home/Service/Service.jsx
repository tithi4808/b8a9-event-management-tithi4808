import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Service = () => {

    const [Cards,setCards]=useState([])
    useEffect(()=>{
        fetch('/Service.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    console.log(Cards)


    return (
        <div className='mt-20 mx-6 md:mx-auto lg:mx-40'>
            <h2 className='font-bold text-3xl text-center mb-8'>Our Services</h2>
            <div className=' grid mb-20  gap-2 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                        Cards.map(card=><Card key={card.id} card={card}></Card>)
                }

            </div>
        </div>
    );
};


export default Service;