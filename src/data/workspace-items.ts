import { WorkspaceItem, ItemCategory } from '@/types/workspace';

export const workspaceItems: WorkspaceItem[] = [
  // Chairs
  { id: 'chair-1', name: 'Office Chair', category: 'chairs', icon: '🪑', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=200&h=200&fit=crop', price: 150, width: 80, height: 80 },
  { id: 'chair-2', name: 'Ergonomic Chair', category: 'chairs', icon: '🪑', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200&h=200&fit=crop', price: 250, width: 85, height: 85 },
  { id: 'chair-3', name: 'Executive Chair', category: 'chairs', icon: '', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&h=200&fit=crop', price: 350, width: 90, height: 90 },
  
  // Desks
  { id: 'desk-1', name: 'Small Desk', category: 'desks', icon: '🪵', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&h=150&fit=crop', price: 200, width: 140, height: 70 },
  { id: 'desk-2', name: 'Large Desk', category: 'desks', icon: '🪵', image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=300&h=150&fit=crop', price: 350, width: 180, height: 80 },
  { id: 'desk-3', name: 'Standing Desk', category: 'desks', icon: '🪵', image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=300&h=150&fit=crop', price: 500, width: 160, height: 80 },
  
  // Accessories
  { id: 'acc-1', name: 'Desk Lamp', category: 'accessories', icon: '💡', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=150&h=150&fit=crop', price: 50, width: 60, height: 40 },
  { id: 'acc-2', name: 'Desk Plant', category: 'accessories', icon: '🌿', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=150&h=150&fit=crop', price: 30, width: 70, height: 30 },
  { id: 'acc-3', name: 'Coffee Mug', category: 'accessories', icon: '☕', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=100&h=100&fit=crop', price: 20, width: 40, height: 40 },
  { id: 'acc-4', name: 'Keyboard', category: 'accessories', icon: '⌨️', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=150&h=80&fit=crop', price: 80, width: 70, height: 30 },
  
  // Monitors
  { id: 'monitor-1', name: '24" Monitor', category: 'monitors', icon: '🖥️', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&h=130&fit=crop', price: 100, width: 100, height: 65 },
  { id: 'monitor-2', name: '27" Monitor', category: 'monitors', icon: '️', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=220&h=140&fit=crop', price: 150, width: 110, height: 70 },
  { id: 'monitor-3', name: 'Ultrawide Monitor', category: 'monitors', icon: '🖥️', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=280&h=120&fit=crop', price: 250, width: 140, height: 60 },
  
  // Coffee Station
  { id: 'coffee-1', name: 'Coffee Machine', category: 'coffee', icon: '☕', image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=150&h=150&fit=crop', price: 80, width: 60, height: 60 },
  { id: 'coffee-2', name: 'Water Dispenser', category: 'coffee', icon: '💧', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=120&h=150&fit=crop', price: 60, width: 50, height: 65 },
  
  // Outdoor Gear
  { id: 'outdoor-1', name: 'Surfboard', category: 'outdoor', icon: '', image: 'https://images.unsplash.com/photo-1502680390548-bdbac40e4ce3?w=250&h=60&fit=crop', price: 120, width: 200, height: 50 },
  { id: 'outdoor-2', name: 'Motorcycle', category: 'outdoor', icon: '🏍️', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=250&h=120&fit=crop', price: 500, width: 220, height: 100 },
  
  // Relax Zone
  { id: 'relax-1', name: 'Bean Bag', category: 'relax', icon: '🛋️', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&h=150&fit=crop', price: 100, width: 100, height: 100 },
  { id: 'relax-2', name: 'Hammock', category: 'relax', icon: '️', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=250&h=100&fit=crop', price: 150, width: 200, height: 80 },
  
  // Garage Space
  { id: 'garage-1', name: 'Tool Shelf', category: 'garage', icon: '🔧', image: 'https://images.unsplash.com/photo-1530124566582-a45a7e3f2594?w=200&h=100&fit=crop', price: 90, width: 120, height: 60 },
  { id: 'garage-2', name: 'Storage Cabinet', category: 'garage', icon: '🗄️', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=150&h=120&fit=crop', price: 120, width: 100, height: 80 },
];

export const workspaceZones = [
  { id: 'main', name: 'Main Workspace', categories: ['chairs', 'desks', 'accessories', 'monitors'] as ItemCategory[] },
  { id: 'coffee', name: 'Coffee Station', categories: ['coffee'] as ItemCategory[] },
  { id: 'outdoor', name: 'Outdoor Gear', categories: ['outdoor'] as ItemCategory[] },
  { id: 'relax', name: 'Relax Zone', categories: ['relax'] as ItemCategory[] },
  { id: 'garage', name: 'Garage Space', categories: ['garage'] as ItemCategory[] },
];
