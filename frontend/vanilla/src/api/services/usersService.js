import axiosInstance from '../../api/axiosInstance';

export const login = async (userData) => {  
    try {
        const users = await axiosInstance.post('/api/users/login', userData);
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const user = await axiosInstance.post('/api/users/register', userData);
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};
