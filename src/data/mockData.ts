import { Product, Category, User, Order } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Power Tools',
    description: 'Professional grade power tools for construction and DIY projects',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 45
  },
  {
    id: '2',
    name: 'Hand Tools',
    description: 'Essential hand tools for precision work and maintenance',
    image: 'https://images.pexels.com/photos/5691720/pexels-photo-5691720.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 78
  },
  {
    id: '3',
    name: 'Electrical',
    description: 'Electrical components, wiring, and safety equipment',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 132
  },
  {
    id: '4',
    name: 'Plumbing',
    description: 'Pipes, fittings, fixtures, and plumbing tools',
    image: 'https://images.pexels.com/photos/8486896/pexels-photo-8486896.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 89
  },
  {
    id: '5',
    name: 'Building Materials',
    description: 'Quality materials for construction and renovation projects',
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 156
  },
  {
    id: '6',
    name: 'Safety Equipment',
    description: 'Personal protective equipment and safety gear',
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 67
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Professional Cordless Drill Kit',
    category: 'Power Tools',
    price: 149.99,
    originalPrice: 199.99,
    description: 'High-performance 20V cordless drill with lithium-ion battery, LED light, and 29-piece accessory kit. Perfect for professional contractors and DIY enthusiasts.',
    specifications: {
      'Voltage': '20V MAX',
      'Chuck Size': '1/2 inch',
      'Torque Settings': '24 + 1',
      'Battery': 'Lithium-ion',
      'Weight': '3.5 lbs',
      'Warranty': '3 years'
    },
    images: [
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    stock: 25,
    rating: 4.8,
    reviews: 142,
    featured: true,
    brand: 'ProBuild',
    tags: ['cordless', 'drill', 'kit', 'battery', 'professional']
  },
  {
    id: '2',
    name: 'Heavy-Duty Circular Saw',
    category: 'Power Tools',
    price: 89.99,
    description: '15-amp circular saw with 7-1/4" carbide blade. Powerful motor delivers 5,300 RPM for fast, clean cuts through lumber and sheet goods.',
    specifications: {
      'Blade Size': '7-1/4 inch',
      'Motor': '15 AMP',
      'RPM': '5,300',
      'Bevel Capacity': '0-56 degrees',
      'Weight': '8.8 lbs',
      'Warranty': '2 years'
    },
    images: [
      'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    stock: 18,
    rating: 4.6,
    reviews: 89,
    featured: true,
    brand: 'PowerMax',
    tags: ['circular', 'saw', 'cutting', 'lumber', 'construction']
  },
  {
    id: '3',
    name: 'Professional Socket Wrench Set',
    category: 'Hand Tools',
    price: 79.99,
    description: '108-piece chrome vanadium steel socket set with ratcheting handles. Includes standard and metric sizes in a durable carrying case.',
    specifications: {
      'Pieces': '108',
      'Material': 'Chrome Vanadium Steel',
      'Drive Sizes': '1/4", 3/8", 1/2"',
      'Socket Range': '4mm-32mm, 5/32"-1-1/4"',
      'Case': 'Blow-molded plastic',
      'Warranty': 'Lifetime'
    },
    images: [
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    stock: 32,
    rating: 4.7,
    reviews: 156,
    featured: false,
    brand: 'MasterCraft',
    tags: ['socket', 'wrench', 'ratchet', 'mechanic', 'professional']
  },
  {
    id: '4',
    name: 'LED Work Light - 5000 Lumens',
    category: 'Electrical',
    price: 34.99,
    originalPrice: 49.99,
    description: 'Ultra-bright LED work light with adjustable tripod stand. Weather-resistant construction with 5000 lumens output for excellent job site illumination.',
    specifications: {
      'Lumens': '5,000',
      'LED Type': 'High-efficiency SMD',
      'Stand Height': '24"-60" adjustable',
      'Power': '50W',
      'Rating': 'IP65 weather-resistant',
      'Warranty': '2 years'
    },
    images: [
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    stock: 45,
    rating: 4.5,
    reviews: 203,
    featured: true,
    brand: 'BrightWork',
    tags: ['LED', 'work light', 'tripod', 'construction', 'bright']
  },
  {
    id: '5',
    name: 'PVC Pipe Fitting Kit',
    category: 'Plumbing',
    price: 24.99,
    description: 'Complete assortment of PVC pipe fittings including elbows, tees, couplings, and reducers. Perfect for residential plumbing projects.',
    specifications: {
      'Material': 'PVC Schedule 40',
      'Sizes': '1/2", 3/4", 1", 1-1/4"',
      'Pieces': '50 assorted fittings',
      'Standards': 'NSF certified',
      'Temperature': 'Up to 140°F',
      'Warranty': '1 year'
    },
    images: [
      'https://images.pexels.com/photos/8486896/pexels-photo-8486896.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    stock: 67,
    rating: 4.3,
    reviews: 94,
    featured: false,
    brand: 'FlowTech',
    tags: ['PVC', 'pipe', 'fittings', 'plumbing', 'residential']
  },
  {
    id: '6',
    name: 'Construction Safety Helmet',
    category: 'Safety Equipment',
    price: 19.99,
    description: 'ANSI-approved hard hat with 4-point suspension system. Lightweight, durable construction with adjustable sizing for all-day comfort.',
    specifications: {
      'Standards': 'ANSI Z89.1 Type I',
      'Material': 'High-density polyethylene',
      'Suspension': '4-point ratchet',
      'Size Range': '6-1/2" to 8"',
      'Weight': '12 oz',
      'Colors': 'White, Yellow, Orange'
    },
    images: [
      'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    stock: 89,
    rating: 4.4,
    reviews: 127,
    featured: false,
    brand: 'SafeGuard',
    tags: ['safety', 'helmet', 'hard hat', 'construction', 'ANSI']
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@hardwarestore.com',
    name: 'Admin User',
    role: 'admin'
  },
  {
    id: '2',
    email: 'customer@example.com',
    name: 'John Customer',
    role: 'customer',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      country: 'USA'
    }
  }
];

export const mockOrders: Order[] = [
  {
    id: '1',
    userId: '2',
    items: [
      { product: products[0], quantity: 1 },
      { product: products[3], quantity: 2 }
    ],
    total: 219.97,
    status: 'processing',
    createdAt: new Date('2024-01-15'),
    shippingAddress: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      country: 'USA'
    },
    paymentMethod: 'Credit Card'
  }
];