import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const useFavorites = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { refetch, data: favorites = [] } = useQuery({
        queryKey: ['favorites', user?.email],
        queryFn: async () => {
            if (!user?.email) {
                throw new Error('User email is not available');
            }
            const res = await fetch(`https://tastyeats-server.onrender.com//favorites?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            return res.json();
        },
    });

    return [favorites, refetch];
};

export default useFavorites;
