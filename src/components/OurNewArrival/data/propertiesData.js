import Prop1 from '../../../assets/images/properties/prop1.png'; 
import Prop2 from '../../../assets/images/properties/prop2.png';
import Prop3 from '../../../assets/images/properties/prop3.png';

const properties = [
  {
    title: 'Modern Apartement',
    price: 280650,
    area: 80,
    bedrooms: 1,
    bathrooms: 1,
    address: '457 Avenue des Arts, 1000, Brussels',
    image: Prop1,
    alt: 'Modern Apartement',
    status: 'FOR SALE',
  },
  {
    title: '35m² studio',
    price: '550 /month',
    area: 35,
    bedrooms: 1,
    bathrooms: 1,
    address: '47 Avenue des Tulipes, 1000, Brussels',
    image: Prop2,
    alt: '35m² studio',
    status: 'FOR RENT',
  },
  {
    title: 'Family apartment',
    price: 450000,
    area: 95,
    bedrooms: 1,
    bathrooms: 1,
    address: '4 Avenue des Arts, 1000, Brussels',
    image: Prop3,
    alt: 'Family Apartement',
    status: 'FOR SALE',
  },
];

export default properties;
