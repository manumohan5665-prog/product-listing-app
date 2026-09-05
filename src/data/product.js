import headphones from "../assets/headphones.webp"
import smartwatch from "../assets/smart watch.webp"
import shoes from "../assets/running shoes.webp"
import tshirt from "../assets/casual t-shirt.webp"
import coffemaker from "../assets/coffee maker.webp"
import tablelamp from "../assets/table lamp.webp"
import backpack from "../assets/backpack.webp"
import wallet from "../assets/leather wallet.webp"

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    category: "Electronics",
    rating: 4.5,
    image: headphones
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    category: "Electronics",
    rating: 4.2,
    image: smartwatch
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2499,
    category: "Fashion",
    rating: 4.7,
    image: shoes
  },
  {
    id: 4,
    name: "Casual T-Shirt",
    price: 999,
    category: "Fashion",
    rating: 4.1,
    image: tshirt
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 3499,
    category: "Home",
    rating: 4.4,
    image: coffemaker
  },
  {
    id: 6,
    name: "Table Lamp",
    price: 1499,
    category: "Home",
    rating: 4.0,
    image: tablelamp
  },
  {
    id: 7,
    name: "Backpack",
    price: 1799,
    category: "Accessories",
    rating: 4.6,
    image: backpack
  },
  {
    id: 8,
    name: "Leather Wallet",
    price: 1299,
    category: "Accessories",
    rating: 4.3,
    image: wallet
  }
];

export default products;