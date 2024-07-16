import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Top = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const api = "http://localhost:3000/cards";
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(api);
      setCards(response.data);
    };
    fetchData();
  }, []);
  useEffect(()=>{
if(window.innerWidth<768){
  
}
  },[])
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredCards = cards.filter(card => 
    (category === '' || card.category === category) &&
    (searchTerm === '' || card.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1); 
  };


  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className="p-10 min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://preview.colorlib.com/theme/pizza/images/about.jpg')",
           backgroundBlendMode: "overlay",
         }}>
      <div className="container mx-auto px-10">
        <div className="crud flex flex-col w-full gap-40 items-center">
          <div className="top flex items-center flex-col justify-center w-full">
            <h2 className="text-7xl font-great-vibes text-yellow-500 italic" data-aos="fade-up">Services</h2>
            <span className="font-bold text-white text-5xl mt-4 text-center" data-aos="fade-up">Our Menu</span>
            <select 
              className="mt-4 cursor-pointer p-2 border border-gray-700 rounded bg-gray-800 text-white"
              onChange={handleCategoryChange}
              value={category}
            >
              <option value="">All Categories</option>
              <option value="Desserts">Desserts</option>
              <option value="Pizza">Pizza</option>
              <option value="Pasta">Pasta</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="mt-4 p-2 border border-gray-700 rounded bg-gray-800 text-white"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>
          
          <div className="cards grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4 gap-8 mt-10">
            {currentCards.length > 0 ? (
              currentCards.map((card) => (
                <div key={card.id} className="card flex flex-col rounded-lg overflow-hidden shadow-lg transition-all delay-100 ease-in-out transform hover:scale-105 bg-gray-800" data-aos="fade-up">
                  <div className="image rounded overflow-hidden h-64">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text p-4 bg-gray-800 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">{card.title}</h3>
                      <p className="text-gray-400">{card.description}</p>
                      <p className="text-yellow-500 mt-2">{card.price}$</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button className="text-gray-400 hover:text-white focus:outline-none transform translate-x-0">
                        <AiOutlineShoppingCart size={24} />
                      </button>
                      <button className="text-gray-400 hover:text-white focus:outline-none transform translate-x-0">
                        <AiOutlineHeart size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-white text-center mt-4">No items found matching "{searchTerm}"</div>
            )}
          </div>
          
          <div className="pagination mt-10 flex justify-center">
            {Array.from({ length: Math.ceil(filteredCards.length / cardsPerPage) }, (_, index) => (
              <button 
                key={index + 1} 
                onClick={() => paginate(index + 1)} 
                className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-white'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
