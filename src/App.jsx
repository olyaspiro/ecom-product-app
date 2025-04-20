import React, { useState } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import './App.css';

const App = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Building Blocks',
      price: 25,
      description: 'Colorful blocks to inspire creativity and motor skills.',
      category: 'Educational',
      image: '/blocks.jpg', 
    },
    {
      id: 2,
      name: 'Remote Control Car',
      price: 40,
      description: 'High-speed car with rechargeable battery and LED lights.',
      category: 'Electronics',
      image: '/remote_control_car.jpg', 
    },
    {
      id: 3,
      name: 'Teddy Bear',
      price: 20,
      description: 'Soft and cuddly teddy bear perfect for snuggles.',
      category: 'Stuffed Toys',
      image: '/teddy_bear.webp', 
    },
    {
      id: 4,
      name: 'Toy Piano',
      price: 30,
      description: 'Mini piano with fun melodies for little musicians.',
      category: 'Musical',
      image: '/piano.jpg', 
    },
    {
      id: 5,
      name: 'Educational Puzzle',
      price: 20,
      description: 'Alphabet puzzle to help kids learn letters and shapes.',
      category: 'Educational',
      image: '/puzzle.jpg', 
    },
    {
      id: 6,
      name: 'Toy Doctor Kit',
      price: 25,
      description: 'Complete playset for little doctors with stethoscope, syringe, and more.',
      category: 'Role Play',
      image: '/doctor_kit.webp', 
    },
    {
      id: 7,
      name: 'Drum Set',
      price: 40,
      description: 'Mini drum set for young drummers.',
      category: 'Musical',
      image: '/drum.jpg',
    },
    {
      id: 8,
      name: 'Toy Guitar',
      price: 30,
      description: 'Colorful guitar with fun sound effects.',
      category: 'Musical',
      image: '/guitar.webp',
    },
    {
      id: 9,
      name: 'Math Flash Cards',
      price: 12,
      description: 'Flash cards to help kids learn basic math operations.',
      category: 'Educational',
      image: '/math_cards.jpg',
    },
    {
      id: 10,
      name: 'Kids Tablet',
      price: 75,
      description: 'Durable tablet preloaded with educational games.',
      category: 'Electronics',
      image: '/tablet.webp',
    },
    {
      id: 11,
      name: 'Walkie Talkies',
      price: 35,
      description: 'Two-way radios for kids to communicate and play.',
      category: 'Electronics',
      image: '/walkie_talkie.jpg',
    },
    {
      id: 12,
      name: 'Elephant',
      price: 22,
      description: 'Adorable elephant plush toy for cuddles.',
      category: 'Stuffed Toys',
      image: '/elephant.jpeg',
    },
    {
      id: 13,
      name: 'Unicorn',
      price: 25,
      description: 'Magical unicorn plush toy with glittery details.',
      category: 'Stuffed Toys',
      image: '/unicorn.jpg',
    },
    {
      id: 14,
      name: 'Chef Playset',
      price: 20,
      description: 'Includes apron, chef hat, and cooking tools for role play.',
      category: 'Role Play',
      image: '/chef_playset.jpg',
    },
    {
      id: 15,
      name: 'Astronaut Costume',
      price: 35,
      description: 'Includes a space suit, helmet, and gloves for aspiring astronauts.',
      category: 'Role Play',
      image: '/astronaut.jpg', 
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="app-container">
      <h1 className="app-title">🧸 Kids Toy Catalog</h1>
      <CategoryFilter
        categories={[...new Set(products.map((product) => product.category))]}
        onCategoryChange={handleCategoryChange}
      />
      <ProductList products={filteredProducts} selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
