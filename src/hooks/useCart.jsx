import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const useCart = () => {
    const { user } = useContext(AuthContext);
    // console.log(user.email)
    const token = localStorage.getItem('access-token')

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            if (!user?.email) {
                throw new Error('User email is not available');
            }
        
            const res = await fetch(`https://tastyeats-server.onrender.com//carts?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            return res.json();
        },
    })

    return [cart, refetch]

}
export default useCart;