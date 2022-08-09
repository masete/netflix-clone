import React, { Children } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const {user} = UserAuth();

    if(!user){
        Navigate('/')
    } else{
        return Children
    }
}

export default ProtectedRoute