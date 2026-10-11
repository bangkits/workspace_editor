'use client';

import { workspaceItems } from '@/data/workspace-items';
import { ItemCategory } from '@/types/workspace';

interface ZoneSectionProps {
  zoneId: string;
  zoneName: string;
  categories: ItemCategory[];
  onSelectItem: (categoryId: string, itemId: string) => void;
}

export default function ZoneSection({ zoneId, zoneName, categories, onSelectItem }: ZoneSectionProps) {
  const zoneItems = workspaceItems.filter(item => categories.includes(item.category));

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        {zoneName}
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {zoneItems.map(item => (
          <button
            key={item.id}
            onClick={() => onSelectItem(item.category, item.id)}
            className="flex flex-col items-center p-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all"
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
