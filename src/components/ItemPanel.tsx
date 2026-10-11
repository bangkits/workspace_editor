'use client';

import { workspaceItems, workspaceZones } from '@/data/workspace-items';
import { ItemCategory } from '@/types/workspace';

interface ItemPanelProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSelectItem: (categoryId: string, itemId: string) => void;
}

export default function ItemPanel({ selectedCategory, onCategoryChange, onSelectItem }: ItemPanelProps) {
  const categories = [
    { id: 'chairs', label: 'Chairs', icon: '🪑' },
    { id: 'desks', label: 'Desks', icon: '🪵' },
    { id: 'accessories', label: 'Accessories', icon: '🖥️' },
  ];

  const filteredItems = workspaceItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-64">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Furniture</h3>
      
      {/* Category Tabs */}
      <div className="flex gap-2 mb-4">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 gap-3">
        {filteredItems.map(item => (
          <button
            key={item.id}
            onClick={() => onSelectItem(selectedCategory, item.id)}
            className="flex flex-col items-center p-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all group"
          >
            <span className="text-2xl mb-1">{item.icon || '📦'}</span>
            <span className="text-xs text-gray-600 text-center">{item.name}</span>
            <span className="text-xs font-semibold text-blue-600 mt-1">${item.price}/mo</span>
          </button>
        ))}
      </div>
    </div>
  );
}
