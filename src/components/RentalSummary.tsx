'use client';

import { PlacedItem } from '@/types/workspace';

interface RentalSummaryProps {
  placedItems: PlacedItem[];
  totalPrice: number;
  onRent: () => void;
  onClear: () => void;
}

export default function RentalSummary({ placedItems, totalPrice, onRent, onClear }: RentalSummaryProps) {
  if (placedItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Ready to Rent?</h3>
      
      {/* Items List */}
      <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
        {placedItems.map(item => (
          <div key={item.placedAt} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span>{item.icon || '📦'}</span>
              <span className="text-gray-700">{item.name}</span>
            </div>
            <span className="font-semibold text-gray-800">${item.price}/mo</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="border-t pt-4 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-800">Total Monthly</span>
          <span className="text-2xl font-bold text-blue-600">${totalPrice}/mo</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onClear}
          className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          Clear All
        </button>
        <button
          onClick={onRent}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Rent Your Setup!
        </button>
      </div>
    </div>
  );
}
