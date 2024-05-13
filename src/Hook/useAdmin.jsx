import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { IsAdmin } from '../utils/IsAdmin';

const useAdmin = async() => {
    const { user } = useContext(AuthContext);
    const res = await IsAdmin(user?.email)
    return res.type
};

export default useAdmin;