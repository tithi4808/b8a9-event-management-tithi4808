import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({card}) => {

    const {name,image,price,short_description,id}=card
    const navigate=useNavigate()
    const handledetails=()=>{
        navigate(`/service/${id}`)
    }



    
    return (
            <div className="card card-compact lg:w-96 bg-sky-50 shadow-xl">
            <figure className='h-40 w-full px-12 mt-8 rounded-full'><img src={image} alt={name} /></figure>
            <div className="card-body">
            <h2 className="card-title justify-center text-2xl">{name}</h2>
            <p className='text-center text-lg'>{short_description}</p>
            <p className='text-center '>Booking Charge: {price}</p>
            <div className="card-actions justify-center">
            <button onClick={handledetails} className="btn bg-blue-300 text-white">Details</button>
            </div>
            </div>
            </div>
    );
};

export default Card;