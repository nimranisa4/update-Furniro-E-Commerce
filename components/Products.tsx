import Link from 'next/link';
import Button from './Button';
import ProductCard from './ProductCard';

enum BadgeType {
  DISCOUNT = 'discount',
  NEW = 'new',
}

const products = [
  {
    id: 1,
    image: '/product1.jpg',
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    currentPrice: '2.500.000',
    originalPrice: '3.500.000',
    badge: { type: BadgeType.DISCOUNT, label: '-30%' },
  },
  {
    id: 2,
    image: '/product2.jpg',
    name: 'Leviosa',
    description: 'Luxury sofa',
    currentPrice: '2.500.000',
    badge: { type: BadgeType.NEW, label: 'New' },
  },
  {
    id: 3,
    image: '/product3.jpg',
    name: 'Lolito',
    description: 'Luxury big sofa',
    currentPrice: '7.000.000',
    originalPrice: '14.000.000',
    badge: { type: BadgeType.DISCOUNT, label: '-50%' },
  },
  {
    id: 4,
    image: '/product4.jpg',
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    currentPrice: '500.000',
    badge: { type: BadgeType.NEW, label: 'New' },
  },
  {
    id: 5,
    image: '/product5.jpg',
    name: 'Grifo',
    description: 'Night lamp',
    currentPrice: '1.500.000',
  },
  {
    id: 6,
    image: '/product6.jpg',
    name: 'Muggo',
    description: 'Small mug',
    currentPrice: '150.000',
  },
  {
    id: 7,
    image: '/product7.png',
    name: 'Pingky',
    description: 'Cute bed set',
    currentPrice: '7.000.000',
    originalPrice: '14.000.000',
    badge: { type: BadgeType.DISCOUNT, label: '-50%' },
  },
  {
    id: 8,
    image: '/product8.png',
    name: 'Potty',
    description: 'Minimalist flower pot',
    currentPrice: '500.000',
    badge: { type: BadgeType.NEW, label: 'New' },
  },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            badge={product.badge}
          />
        ))}
      </div>
      <Link href='/shop'>
     <Button label='Show More'/>
     </Link>
    </div>
  );
};

export default ProductGrid;
