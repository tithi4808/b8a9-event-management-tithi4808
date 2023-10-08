import React, { useContext } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';

const Profile = () => {
    const {User}=useContext(AuthContext)
    console.log(User)
    return (
        <div className='text-center mt-20 mb-32'>
            <h2 className='text-3xl font-bold mb-10'>Your Profile</h2>
            <div className='space-y-4 lg:mx-52'>
                <div className='flex justify-center items-center'>
                <img className='h-40 rounded-full ' src={User.photoURL} alt="" />
                </div>
                
                <div>
                <p><span className='text-lg font-semibold'>Name:</span> {User.displayName}</p>
                <p><span className='text-lg font-semibold'>Email:</span> {User.email}</p>
                <p><span className='text-lg font-semibold'>Address:</span> N/A</p>
                <p><span className='text-lg font-semibold'>Phone Number:</span> N/A </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;