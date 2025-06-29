
import type { Product, Category } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'Necklaces', slug: 'necklaces', imageUrl: 'https://images.unsplash.com/photo-1601121141499-17ae80afc03a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxpbmRpYW4lMjBHb2xkJTIwbmVja2xhY2V8ZW58MHx8fHwxNzUwNTcxMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Elegant necklaces for every occasion.', 'data-ai-hint': 'gold necklaces' },
  { id: '2', name: 'Rings', slug: 'rings', imageUrl: 'https://images.unsplash.com/photo-1674465992629-f8f81a8fb6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxnb2xkJTIwZGlhbW9uZCUyMHJpbmd8ZW58MHx8fHwxNzUwNTcxMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Beautiful rings to adorn your fingers.', 'data-ai-hint': 'diamond rings' },
  { id: '3', name: 'Earrings', slug: 'earrings', imageUrl: 'https://images.unsplash.com/photo-1588444650733-d0767b753fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZWFycmluZ3N8ZW58MHx8fHwxNzUwNTcwNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Stunning earrings to complete your look.', 'data-ai-hint': 'gemstone earrings' },
  { id: '4', name: 'Bracelets', slug: 'bracelets', imageUrl: 'https://images.unsplash.com/photo-1740567389909-b36e9cadbef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8Z29sZCUyMGJyYWNlbGV0c3xlbnwwfHx8fDE3NTA1NzE1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Chic bracelets for a touch of glamour.', 'data-ai-hint': 'silver bracelets' },
  { id: '5', name: 'Bridal Collection', slug: 'bridal-collection', imageUrl: 'https://images.unsplash.com/photo-1645856048246-2ea2557cc3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8SW5kaWFuJTIwYnJpZGUlMjBpbiUyMGdvbGQlMjBqZXdlbGxlcnl8ZW58MHx8fHwxNzUwNTcxNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Exquisite pieces for your special day.', 'data-ai-hint': 'bridal sets' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Seraphina Gold Necklace',
    slug: 'seraphina-gold-necklace',
    description: 'A timeless piece crafted from 22k gold, featuring intricate floral patterns. Perfect for weddings and grand occasions.',
    price: 108000.00,
    category: 'necklaces',
    images: ['https://images.unsplash.com/photo-1600862754152-80a263dd564f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxHb2xkJTIwTmVja2xhY2V8ZW58MHx8fHwxNzUwNTcxNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080'],
    material: '22k Gold',
    careInstructions: 'Store in a soft pouch. Avoid contact with perfumes and chemicals. Clean with a soft, dry cloth.',
    stock: 10,
    'data-ai-hint': 'intricate gold necklace',
  },
  {
    id: '2',
    name: 'Orion Diamond Ring',
    slug: 'orion-diamond-ring',
    description: 'An exquisite solitaire diamond ring set in platinum. Its brilliance captures the essence of eternal love.',
    price: 240000.00,
    category: 'rings',
    images: ['https://images.unsplash.com/photo-1719924998065-0c60e329ef58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZ3xlbnwwfHx8fDE3NTA1NzE4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080'],
    material: 'Platinum, 1.5ct Diamond (VS1, G Color)',
    careInstructions: 'Clean regularly with a specialized diamond cleaner. Avoid hard knocks. Store separately.',
    stock: 5,
    'data-ai-hint': 'diamond ring solitaire',
  },
  {
    id: '3',
    name: 'Azure Drop Earrings',
    slug: 'azure-drop-earrings',
    description: 'Elegant drop earrings featuring pear-shaped sapphires surrounded by a halo of micro-pavé diamonds, set in 18k white gold.',
    price: 81500.00,
    category: 'earrings',
    images: ['https://images.unsplash.com/photo-1693212793204-bcea856c75fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkaWFtb25kJTIwZWFycmluZ3N8ZW58MHx8fHwxNzUwNTcwNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080'],
    material: '18k White Gold, Sapphires, Diamonds',
    careInstructions: 'Handle with care. Clean with a soft cloth. Avoid ultrasonic cleaners for gemstone jewelry.',
    stock: 15,
    'data-ai-hint': 'sapphire earrings diamonds',
  },
  {
    id: '4',
    name: 'Luna Silver Bracelet',
    slug: 'luna-silver-bracelet',
    description: 'A delicate sterling silver chain bracelet with moonstone charms. Perfect for everyday elegance.',
    price: 30000.00,
    category: 'bracelets',
    images: ['https://images.unsplash.com/photo-1744722093742-aad22c7fa68b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxTaWx2ZXIlMjBicmFjZWxldHxlbnwwfHx8fDE3NTA1NzE5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'],
    material: 'Sterling Silver, Moonstones',
    careInstructions: 'Polish regularly with a silver polishing cloth. Store in an anti-tarnish bag.',
    stock: 20,
    'data-ai-hint': 'silver bracelet moonstone',
  },
  {
    id: '5',
    name: 'Maharani Bridal Set',
    slug: 'maharani-bridal-set',
    description: 'A majestic bridal set including a kundan necklace, matching earrings, and maang tikka, adorned with pearls and rubies.',
    price: 390000.00,
    category: 'bridal-collection',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    material: 'Gold-plated alloy, Kundan, Pearls, Rubies',
    careInstructions: 'Keep away from moisture and direct heat. Store in a velvet-lined box.',
    stock: 3,
    'data-ai-hint': 'indian bridal jewelry',
  },
  {
    id: '6',
    name: 'Eternal Knot Gold Hoops',
    slug: 'eternal-knot-gold-hoops',
    description: 'Classic gold hoop earrings with a subtle eternal knot design. Versatile for both casual and formal wear.',
    price: 41500.00,
    category: 'earrings',
    images: ['https://placehold.co/600x800.png'],
    material: '18k Yellow Gold',
    careInstructions: 'Wipe with a soft cloth after wear. Avoid harsh chemicals.',
    stock: 12,
    'data-ai-hint': 'gold hoop earrings',
  },
   {
    id: '7',
    name: 'Celestial Pendant Necklace',
    slug: 'celestial-pendant-necklace',
    description: 'A beautiful rose gold pendant necklace featuring a star motif encrusted with tiny diamonds.',
    price: 62000.00,
    category: 'necklaces',
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/600x800.png'],
    material: '14k Rose Gold, Diamonds',
    careInstructions: 'Store separately to avoid scratches. Clean gently with a soft brush and mild soap.',
    stock: 8,
    'data-ai-hint': 'rose gold necklace diamond',
  },
  {
    id: '8',
    name: 'Royal Emerald Ring',
    slug: 'royal-emerald-ring',
    description: 'A statement ring featuring a large, GIA-certified emerald surrounded by a double halo of diamonds, set in white gold.',
    price: 450000.00,
    category: 'rings',
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/600x800.png'],
    material: '18k White Gold, Emerald, Diamonds',
    careInstructions: 'Emeralds are delicate; avoid temperature shocks and harsh chemicals. Professional cleaning recommended.',
    stock: 2,
    'data-ai-hint': 'emerald ring diamond halo',
  },
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  let productsData: Product[] = [];
  if (typeof window !== 'undefined') {
    const storedProducts = localStorage.getItem('adminManagedProductsSIJ');
    productsData = storedProducts ? JSON.parse(storedProducts) : products;
  } else {
    productsData = products;
  }
  return productsData.filter(product => product.category === categorySlug);
};

export const getProductBySlug = (slug: string): Product | undefined => {
    let productsData: Product[] = [];
    if (typeof window !== 'undefined') {
        const storedProducts = localStorage.getItem('adminManagedProductsSIJ');
        productsData = storedProducts ? JSON.parse(storedProducts) : products;
    } else {
        productsData = products;
    }
    return productsData.find(product => product.slug === slug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const searchProducts = (query: string): Product[] => {
  let productsData: Product[] = [];
  if (typeof window !== 'undefined') {
    const storedProducts = localStorage.getItem('adminManagedProductsSIJ');
    productsData = storedProducts ? JSON.parse(storedProducts) : products;
  } else {
    productsData = products;
  }
  
  if (!query) return [];
  const lowerCaseQuery = query.toLowerCase();
  return productsData.filter(product => 
    product.name.toLowerCase().includes(lowerCaseQuery) ||
    product.description.toLowerCase().includes(lowerCaseQuery) ||
    product.category.toLowerCase().includes(lowerCaseQuery)
  );
};
