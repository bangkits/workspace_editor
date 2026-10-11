'use client';

import { useWorkspaceEditor } from '@/hooks/useWorkspaceEditor';
import { workspaceItems } from '@/data/workspace-items';
import Workspace3DViewer from '@/components/3d/Workspace3DViewer';

export default function Home() {
  const {
    placedItems,
    selectedCategory,
    setSelectedCategory,
    addItem,
    toggleItem,
    removeByCategory,
    clearAll,
    saveDraft,
    loadDraft,
    deleteDraft,
    savedDrafts,
    totalPrice,
    hasItemInCategory,
  } = useWorkspaceEditor();

  const handleSelectItem = (categoryId: string, itemId: string) => {
    const item = workspaceItems.find(i => i.id === itemId);
    if (item) {
      toggleItem(item);
    }
  };

  const handleRent = () => {
    alert(` Rental confirmed! Total: $${totalPrice}/month\n\nItems:\n${placedItems.map(i => `- ${i.name}: $${i.price}/mo`).join('\n')}`);
  };

  const categories = [
    { id: 'desks', label: 'Desks', icon: '🪵' },
    { id: 'chairs', label: 'Chairs', icon: '🪑' },
    { id: 'monitors', label: 'Monitors', icon: '🖥️' },
    { id: 'accessories', label: 'Accessories', icon: '⌨️' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-sm shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white text-center">
            3D Workspace Designer
          </h1>
          <p className="text-center text-gray-400 mt-2">
            — Combine Desk, Chair, Monitor & Accessories! —
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Item Selection Panel */}
          <div className="lg:col-span-1 space-y-4">
            {/* Category Tabs */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-4 text-white">Select Category</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
                      selectedCategory === cat.id
                        ? 'border-blue-500 bg-blue-500/20 text-white'
                        : 'border-gray-600 bg-gray-700 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <span className="text-2xl mb-1">{cat.icon}</span>
                    <span className="text-xs font-medium">{cat.label}</span>
                    {hasItemInCategory(cat.id) && (
                      <span className="text-xs text-green-400 mt-1">✓ Added</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Items Grid */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-4 text-white">
                {categories.find(c => c.id === selectedCategory)?.label} Items
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {workspaceItems
                  .filter(item => item.category === selectedCategory)
                  .map(item => {
                    const isSelected = placedItems.some(p => p.id === item.id);
                    const isAccessory = item.category === 'accessories';
                    const categoryHasItem = hasItemInCategory(item.category);
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelectItem(item.category, item.id)}
                        className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
                          isSelected
                            ? 'border-green-500 bg-green-500/20'
                            : isAccessory && categoryHasItem
                              ? 'border-gray-600 hover:border-blue-500 hover:bg-gray-700'
                              : 'border-gray-600 hover:border-blue-500 hover:bg-gray-700'
                        }`}
                      >
                        <span className="text-2xl mb-1">{item.icon || '📦'}</span>
                        <span className="text-xs text-gray-300 text-center">{item.name}</span>
                        <span className="text-xs font-semibold text-blue-400 mt-1">${item.price}/mo</span>
                        {isSelected && (
                          <span className="text-xs text-green-400 mt-1">✓ Selected</span>
                        )}
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Current Setup Summary */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-white">Your Setup</h3>
              {placedItems.length === 0 ? (
                <p className="text-gray-400 text-sm">No items selected yet</p>
              ) : (
                <div className="space-y-2">
                  {placedItems.map(item => (
                    <div key={item.placedAt} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>{item.icon || '📦'}</span>
                        <span className="text-gray-300 text-sm">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 text-sm">${item.price}/mo</span>
                        <button
                          onClick={() => toggleItem(item)}
                          className="text-red-400 hover:text-red-300 text-xs"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-gray-700 pt-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold">Total</span>
                      <span className="text-xl font-bold text-blue-400">${totalPrice}/mo</span>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={clearAll}
                  disabled={placedItems.length === 0}
                  className="flex-1 px-3 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Clear All
                </button>
                <button
                  onClick={saveDraft}
                  disabled={placedItems.length === 0}
                  className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  💾 Save Draft
                </button>
                <button
                  onClick={handleRent}
                  disabled={placedItems.length === 0}
                  className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Rent Now
                </button>
              </div>
            </div>

            {/* Saved Drafts */}
            {savedDrafts.length > 0 && (
              <div className="bg-gray-800 rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-white">Saved Drafts</h3>
                <div className="space-y-2">
                  {savedDrafts.map((draft, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-700 rounded-lg p-2">
                      <div className="flex-1">
                        <span className="text-sm text-gray-300">Draft {index + 1}</span>
                        <span className="text-xs text-gray-400 ml-2">({draft.length} items, ${draft.reduce((sum, i) => sum + i.price, 0)}/mo)</span>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => loadDraft(index)}
                          className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
                        >
                          Load
                        </button>
                        <button
                          onClick={() => deleteDraft(index)}
                          className="px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3D Viewer */}
          <div className="lg:col-span-3">
            <Workspace3DViewer placedItems={placedItems} />
            
            {/* Instructions */}
            <div className="mt-4 bg-gray-800 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">How to Use</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Select a category (Desks, Chairs, Monitors, Accessories)</li>
                <li>• Click an item to add it to your workspace</li>
                <li>• Items are automatically positioned together</li>
                <li>• Left-click + drag to rotate the 3D view</li>
                <li>• Right-click + drag to pan the view</li>
                <li>• Scroll to zoom in/out</li>
                <li>• Click ✕ to remove individual items</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>3D Workspace Editor — Design, Visualize, Rent Your Perfect Setup</p>
        </div>
      </footer>
    </div>
  );
}
