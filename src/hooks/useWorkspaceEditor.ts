'use client';

import { useState, useCallback } from 'react';
import { WorkspaceItem, PlacedItem } from '@/types/workspace';

export function useWorkspaceEditor() {
  const [placedItems, setPlacedItems] = useState<PlacedItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('chairs');
  const [savedDrafts, setSavedDrafts] = useState<PlacedItem[][]>([]);

  const addItem = useCallback((item: WorkspaceItem, x?: number, y?: number, z?: number) => {
    // Accessories can have multiple items, others replace existing
    const isAccessory = item.category === 'accessories';
    const existingIndex = isAccessory ? -1 : placedItems.findIndex(p => p.category === item.category);
    
    const placedItem: PlacedItem = {
      ...item,
      x: x ?? 0,
      y: y ?? 0,
      z: z ?? 0,
      placedAt: Date.now(),
    };
    
    if (existingIndex >= 0) {
      // Replace existing item of same category (desks, chairs, monitors)
      setPlacedItems(prev => {
        const newItems = [...prev];
        newItems[existingIndex] = placedItem;
        return newItems;
      });
    } else {
      // Add new item (accessories or first item in category)
      setPlacedItems(prev => [...prev, placedItem]);
    }
  }, [placedItems]);

  const toggleItem = useCallback((item: WorkspaceItem, x?: number, y?: number, z?: number) => {
    const isAccessory = item.category === 'accessories';
    const existingIndex = placedItems.findIndex(p => p.id === item.id);
    
    if (existingIndex >= 0) {
      // Remove item (toggle off)
      setPlacedItems(prev => prev.filter((_, idx) => idx !== existingIndex));
    } else {
      // Add item (toggle on)
      const placedItem: PlacedItem = {
        ...item,
        x: x ?? 0,
        y: y ?? 0,
        z: z ?? 0,
        placedAt: Date.now(),
      };
      
      if (isAccessory) {
        setPlacedItems(prev => [...prev, placedItem]);
      } else {
        // Replace existing item of same category
        const catIndex = placedItems.findIndex(p => p.category === item.category);
        if (catIndex >= 0) {
          setPlacedItems(prev => {
            const newItems = [...prev];
            newItems[catIndex] = placedItem;
            return newItems;
          });
        } else {
          setPlacedItems(prev => [...prev, placedItem]);
        }
      }
    }
  }, [placedItems]);

  const removeItem = useCallback((placedAt: number) => {
    setPlacedItems(prev => prev.filter(item => item.placedAt !== placedAt));
  }, []);

  const removeByCategory = useCallback((category: string) => {
    setPlacedItems(prev => prev.filter(item => item.category !== category));
  }, []);

  const clearAll = useCallback(() => {
    setPlacedItems([]);
  }, []);

  const saveDraft = useCallback(() => {
    if (placedItems.length > 0) {
      setSavedDrafts(prev => [...prev, [...placedItems]]);
    }
  }, [placedItems]);

  const loadDraft = useCallback((index: number) => {
    if (savedDrafts[index]) {
      setPlacedItems([...savedDrafts[index]]);
    }
  }, [savedDrafts]);

  const deleteDraft = useCallback((index: number) => {
    setSavedDrafts(prev => prev.filter((_, idx) => idx !== index));
  }, []);

  const totalPrice = placedItems.reduce((sum, item) => sum + item.price, 0);

  const hasItemInCategory = useCallback((category: string) => {
    return placedItems.some(item => item.category === category);
  }, [placedItems]);

  const getItemByCategory = useCallback((category: string) => {
    return placedItems.find(item => item.category === category);
  }, [placedItems]);

  return {
    placedItems,
    selectedCategory,
    setSelectedCategory,
    addItem,
    toggleItem,
    removeItem,
    removeByCategory,
    clearAll,
    saveDraft,
    loadDraft,
    deleteDraft,
    savedDrafts,
    totalPrice,
    hasItemInCategory,
    getItemByCategory,
  };
}
