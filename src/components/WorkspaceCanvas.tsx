'use client';

import { useState, useRef } from 'react';
import { PlacedItem } from '@/types/workspace';

interface WorkspaceCanvasProps {
  placedItems: PlacedItem[];
  onDropItem: (item: PlacedItem) => void;
  onRemoveItem: (placedAt: number) => void;
  onMoveItem: (placedAt: number, x: number, y: number) => void;
}

export default function WorkspaceCanvas({ placedItems, onDropItem, onRemoveItem, onMoveItem }: WorkspaceCanvasProps) {
  const [draggingItem, setDraggingItem] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('application/json');
    if (data) {
      const item = JSON.parse(data);
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - item.width / 2;
      const y = e.clientY - rect.top - item.height / 2;
      onDropItem({ ...item, x: Math.max(0, x), y: Math.max(0, y) });
    }
  };

  const handleMouseDown = (e: React.MouseEvent, item: PlacedItem) => {
    e.preventDefault();
    setDraggingItem(item.placedAt);
    setDragOffset({
      x: e.clientX - item.x,
      y: e.clientY - item.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingItem === null || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragOffset.x;
    const y = e.clientY - rect.top - dragOffset.y;

    onMoveItem(draggingItem, Math.max(0, x), Math.max(0, y));
  };

  const handleMouseUp = () => {
    setDraggingItem(null);
  };

  return (
    <div
      ref={canvasRef}
      className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-gray-200 min-h-[500px] overflow-hidden"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Placed Items */}
      {placedItems.map(item => (
        <div
          key={item.placedAt}
          className={`absolute group ${draggingItem === item.placedAt ? 'cursor-grabbing z-50' : 'cursor-grab'}`}
          style={{
            left: item.x,
            top: item.y,
            width: item.width,
            height: item.height,
            transition: draggingItem === item.placedAt ? 'none' : 'box-shadow 0.2s',
          }}
          onMouseDown={(e) => handleMouseDown(e, item)}
        >
          <div className={`w-full h-full bg-white rounded-lg shadow-md border-2 flex flex-col items-center justify-center p-2 overflow-hidden ${
            draggingItem === item.placedAt 
              ? 'border-blue-500 shadow-xl scale-105' 
              : 'border-gray-200 hover:border-blue-400'
          } transition-all`}>
            {item.image ? (
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover rounded"
                draggable={false}
              />
            ) : (
              <>
                <span className="text-2xl">{item.icon || '📦'}</span>
                <span className="text-xs text-gray-600 mt-1 text-center truncate w-full">{item.name}</span>
              </>
            )}
            
            {/* Remove Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveItem(item.placedAt);
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-md z-10"
            >
              ×
            </button>
          </div>
        </div>
      ))}

      {/* Empty State */}
      {placedItems.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <span className="text-4xl block mb-2">📋</span>
            <p className="text-sm">Drag items here to design your workspace</p>
          </div>
        </div>
      )}
    </div>
  );
}
