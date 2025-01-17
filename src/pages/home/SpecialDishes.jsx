import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../components/Cards";
import { FaAngleRight, FaAngleLeft  } from "react-icons/fa6";
import useFavorites from "../../hooks/useFavorites";


const SpecialDishes = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);
  const [favorites, refetch] = useFavorites();

  useEffect(() => {
    fetch("https://tastyeats-server.onrender.com/menu")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        setRecipes(specials);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-10 relative">
       <div className='text-left'>
            <p className='subtitle'>Customer Favorites</p>
            <h2 className='title'>Popular Dishes</h2>
        </div>
      <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
        <button onClick={() => slider?.current?.slickPrev()}
        className=" btn p-2 rounded-full ml-5"
        >
        <FaAngleLeft className=" h-8 w-8 p-1"/>
        </button>
        <button
          className="bg-green btn p-2 rounded-full ml-5"
          onClick={() => slider?.current?.slickNext()}
        >
          <FaAngleRight className=" h-8 w-8 p-1"/>
        </button>
      </div>

      <Slider ref={slider} {...settings} className="overflow-hidden mt-4 space-x-5">
        {recipes.map((item, i) => {
          const favorite =  Array.isArray(favorites) ? favorites.find(fav => fav.menuItemId === item._id) : null;
          return (
            <Cards item={item} key={i}
              isFavorite={!!favorite}
              refetchFavorites={refetch}
              favoriteId={favorite?._id}  
            />
          )
        })}
      </Slider>
    </div>
  );
};

export default SpecialDishes;