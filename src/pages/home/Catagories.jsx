import React, { useEffect, useState } from 'react'
import Pizza from '../../assets/Categories/pizza slice.png'
import Dessert from '../../assets/Categories/Icecream.png'
import Drink from '../../assets/Categories/Iced tea.png'
import AllFoods from '../../assets/Categories/All foods.png' 
import { useNavigate } from 'react-router-dom'

const Catagories = () => {

  const navigate = useNavigate()

  const [categoryItems, setCategoryItems] = useState([
    { id: 1, title: "Pizza", description: "(0 pizzas)", image: Pizza },
    { id: 2, title: "Dessert", description: "(0 desserts)", image: Dessert },
    { id: 3, title: "Drinks", description: "(0 drinks)", image: Drink },
    { id: 4, title: "Browse All", description: "(0 items)", image: AllFoods }
  ]);
    
  useEffect(() => {
    // Fetch data from the backend API
    const fetchCategoryCounts = async () => {
      try {
        const response = await fetch('https://tastyeats-server.onrender.com/menu/count/all');
        const data = await response.json();
        // Map the counts to your category items
        const categories = [
          { id: 1, title: "Pizza", description: `(${data.find(count => count._id === 'pizza')?.count || 0} pizzas)`, image: Pizza },
          { id: 2, title: "Dessert", description: `(${data.find(count => count._id === 'dessert')?.count || 0} desserts)`, image: Dessert },
          { id: 3, title: "Drinks", description: `(${data.find(count => count._id === 'drinks')?.count || 0} drinks)`, image: Drink },
          { id: 4, title: "All", description: `(${data.reduce((acc, curr) => acc + curr.count, 0)} items)`, image: AllFoods }
        ];
        // console.log(data)
        setCategoryItems(categories);
      } catch (error) {
        console.error("Error fetching category counts", error.message);
      }
    };

    fetchCategoryCounts();
  }, []);

  const handleCategoryClick = (category) => {
    navigate('/menu', {state: {category: category}});
  };

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16'>
        <div className='text-center'>
            <p className='subtitle'>Customer Favourites</p>
            <h2 className='title'>Popular Categories</h2>
        </div>

        {/* category cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
          {
            categoryItems.map((item, i) => (
              <div key={i} onClick={() => handleCategoryClick(item.title.toLowerCase())}
                className='shadow-xl rounded-xl border-y-2 border-green bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-6 transition-all duration-300 z-10'>
                <div className='w-full mx-auto flex items-center justify-center'>
                  <img src={item.image} alt="" className='rounded-xl w-32 h-32' />
                </div>
                <div className='mt-3 space-y-1'>
                  <h5 className='text-[#1E1E1E] font-semibold'>{item.title}</h5>
                  <p className='text-secondary text-sm'>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Catagories