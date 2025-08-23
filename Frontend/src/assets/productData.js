import CategoryImg1 from '../assets/frozen-fruits.jpg'
import CategoryImg2 from '../assets/vegitables.jpg'
import CategoryImg3 from '../assets/basmati.jpg'
import CategoryImg4 from '../assets/nonbasmati.jpg'
import CategoryImg5 from '../assets/jaggery.jpg'

export const Category = [
  {
    id: 1,
    name: "Frozen Fruits",
    image : CategoryImg1
  },
  {
    id: 2,
    name: "Fresh Fruits & Vegetables",
    image: CategoryImg2
  },
  {
    id: 3,
    name: "Basmati Rice",
    image: CategoryImg3
  },
  {
    id: 4,
    name: "Non-Basmati Rice",
    image: CategoryImg4
  },
  {
    id: 5,
    name: "Jaggery",
    image: CategoryImg5
  }
];

export const Products = [
  {
    "id": 101,
    "name": "Apple",
    "price": 120,
    "unit": "per kg",
    "image": "/images/products/apple.jpg",
    "categoryId": 1
  },
  {
    "id": 102,
    "name": "Banana",
    "price": 60,
    "unit": "per dozen",
    "image": "/images/products/banana.jpg",
    "categoryId": 1
  },
  {
    "id": 201,
    "name": "Tomato",
    "price": 40,
    "unit": "per kg",
    "image": "/images/products/tomato.jpg",
    "categoryId": 2
  },
  {
    "id": 202,
    "name": "Potato",
    "price": 30,
    "unit": "per kg",
    "image": "/images/products/potato.jpg",
    "categoryId": 2
  },
  {
    "id": 301,
    "name": "Milk",
    "price": 50,
    "unit": "per liter",
    "image": "/images/products/milk.jpg",
    "categoryId": 3
  },
  {
    "id": 401,
    "name": "Wheat",
    "price": 25,
    "unit": "per kg",
    "image": "/images/products/wheat.jpg",
    "categoryId": 4
  }
]