export interface WorkspaceItem {
  id: string;
  name: string;
  category: ItemCategory;
  icon: string;
  image?: string;
  price: number;
  width: number;
  height: number;
}

export type ItemCategory = 
  | 'chairs'
  | 'desks'
  | 'accessories'
  | 'monitors'
  | 'coffee'
  | 'outdoor'
  | 'relax'
  | 'garage';

export interface PlacedItem extends WorkspaceItem {
  x: number;
  y: number;
  z: number;
  placedAt: number;
}

export interface WorkspaceZone {
  id: string;
  name: string;
  categories: ItemCategory[];
}
