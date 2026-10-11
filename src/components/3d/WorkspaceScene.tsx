'use client';

import { WorkspaceItem } from '@/types/workspace';

// ==========================================
// DESK MODELS
// ==========================================

// Desk Model 1: Standard Wooden Desk
function DeskStandard3D() {
  return (
    <group position={[0, 0, 0]}>
      {/* Desk Top */}
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.08, 1.2]} />
        <meshStandardMaterial color="#8B6F47" roughness={0.7} />
      </mesh>
      
      {/* Desk Legs */}
      <mesh position={[-1.1, 0.375, -0.5]} castShadow>
        <boxGeometry args={[0.08, 0.75, 0.08]} />
        <meshStandardMaterial color="#6B5744" roughness={0.8} />
      </mesh>
      <mesh position={[1.1, 0.375, -0.5]} castShadow>
        <boxGeometry args={[0.08, 0.75, 0.08]} />
        <meshStandardMaterial color="#6B5744" roughness={0.8} />
      </mesh>
      <mesh position={[-1.1, 0.375, 0.5]} castShadow>
        <boxGeometry args={[0.08, 0.75, 0.08]} />
        <meshStandardMaterial color="#6B5744" roughness={0.8} />
      </mesh>
      <mesh position={[1.1, 0.375, 0.5]} castShadow>
        <boxGeometry args={[0.08, 0.75, 0.08]} />
        <meshStandardMaterial color="#6B5744" roughness={0.8} />
      </mesh>
    </group>
  );
}

// Desk Model 2: Modern L-Shaped Desk
function DeskLShaped3D() {
  return (
    <group position={[0, 0, 0]}>
      {/* Main Desk Top */}
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.08, 1.4]} />
        <meshStandardMaterial color="#2D3748" roughness={0.4} metalness={0.2} />
      </mesh>
      
      {/* Side Extension */}
      <mesh position={[1.6, 0.75, 0.7]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.08, 0.8]} />
        <meshStandardMaterial color="#2D3748" roughness={0.4} metalness={0.2} />
      </mesh>
      
      {/* Metal Legs */}
      <mesh position={[-1.2, 0.375, -0.6]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.75, 8]} />
        <meshStandardMaterial color="#718096" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[1.2, 0.375, -0.6]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.75, 8]} />
        <meshStandardMaterial color="#718096" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[-1.2, 0.375, 0.6]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.75, 8]} />
        <meshStandardMaterial color="#718096" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[1.2, 0.375, 0.6]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.75, 8]} />
        <meshStandardMaterial color="#718096" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
}

// Desk Model 3: Standing Desk
function DeskStanding3D() {
  return (
    <group position={[0, 0, 0]}>
      {/* Desk Top */}
      <mesh position={[0, 1.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.06, 1.3]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.3} />
      </mesh>
      
      {/* Adjustable Legs */}
      <mesh position={[-1.1, 0.55, -0.55]} castShadow>
        <boxGeometry args={[0.1, 1.1, 0.1]} />
        <meshStandardMaterial color="#4A5568" roughness={0.5} metalness={0.6} />
      </mesh>
      <mesh position={[1.1, 0.55, -0.55]} castShadow>
        <boxGeometry args={[0.1, 1.1, 0.1]} />
        <meshStandardMaterial color="#4A5568" roughness={0.5} metalness={0.6} />
      </mesh>
      <mesh position={[-1.1, 0.55, 0.55]} castShadow>
        <boxGeometry args={[0.1, 1.1, 0.1]} />
        <meshStandardMaterial color="#4A5568" roughness={0.5} metalness={0.6} />
      </mesh>
      <mesh position={[1.1, 0.55, 0.55]} castShadow>
        <boxGeometry args={[0.1, 1.1, 0.1]} />
        <meshStandardMaterial color="#4A5568" roughness={0.5} metalness={0.6} />
      </mesh>
      
      {/* Control Panel */}
      <mesh position={[1.2, 0.9, 0.65]} castShadow>
        <boxGeometry args={[0.15, 0.08, 0.05]} />
        <meshStandardMaterial color="#1A202C" emissive="#4299E1" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

// ==========================================
// CHAIR MODELS
// ==========================================

// Chair Model 1: Standard Office Chair
function ChairOffice3D({ deskHeight = 0.75 }: { deskHeight?: number }) {
  return (
    <group position={[0, 0, 1.2]}>
      {/* Seat */}
      <mesh position={[0, deskHeight - 0.25, 0]} castShadow>
        <boxGeometry args={[0.7, 0.1, 0.7]} />
        <meshStandardMaterial color="#2D3748" roughness={0.6} />
      </mesh>
      
      {/* Back Rest */}
      <mesh position={[0, deskHeight + 0.25, 0.3]} castShadow>
        <boxGeometry args={[0.7, 0.9, 0.08]} />
        <meshStandardMaterial color="#2D3748" roughness={0.6} />
      </mesh>
      
      {/* Base Pole */}
      <mesh position={[0, (deskHeight - 0.25) / 2, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, deskHeight - 0.25, 8]} />
        <meshStandardMaterial color="#4A5568" roughness={0.5} />
      </mesh>
      
      {/* Wheels Base */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.04, 5]} />
        <meshStandardMaterial color="#4A5568" roughness={0.5} />
      </mesh>
    </group>
  );
}

// Chair Model 2: Ergonomic Chair with Headrest
function ChairErgonomic3D({ deskHeight = 0.75 }: { deskHeight?: number }) {
  return (
    <group position={[0, 0, 1.2]}>
      {/* Seat */}
      <mesh position={[0, deskHeight - 0.25, 0]} castShadow>
        <boxGeometry args={[0.75, 0.12, 0.75]} />
        <meshStandardMaterial color="#1A202C" roughness={0.5} />
      </mesh>
      
      {/* Back Rest */}
      <mesh position={[0, deskHeight + 0.25, 0.35]} castShadow>
        <boxGeometry args={[0.75, 1.0, 0.1]} />
        <meshStandardMaterial color="#1A202C" roughness={0.5} />
      </mesh>
      
      {/* Headrest */}
      <mesh position={[0, deskHeight + 0.85, 0.35]} castShadow>
        <boxGeometry args={[0.5, 0.2, 0.1]} />
        <meshStandardMaterial color="#2D3748" roughness={0.5} />
      </mesh>
      
      {/* Armrests */}
      <mesh position={[-0.45, deskHeight, 0]} castShadow>
        <boxGeometry args={[0.08, 0.3, 0.5]} />
        <meshStandardMaterial color="#4A5568" roughness={0.4} />
      </mesh>
      <mesh position={[0.45, deskHeight, 0]} castShadow>
        <boxGeometry args={[0.08, 0.3, 0.5]} />
        <meshStandardMaterial color="#4A5568" roughness={0.4} />
      </mesh>
      
      {/* Base Pole */}
      <mesh position={[0, (deskHeight - 0.25) / 2, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, deskHeight - 0.25, 8]} />
        <meshStandardMaterial color="#718096" roughness={0.3} metalness={0.7} />
      </mesh>
      
      {/* Star Base */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <cylinderGeometry args={[0.45, 0.45, 0.05, 5]} />
        <meshStandardMaterial color="#718096" roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

// Chair Model 3: Executive Leather Chair
function ChairExecutive3D({ deskHeight = 0.75 }: { deskHeight?: number }) {
  return (
    <group position={[0, 0, 1.2]}>
      {/* Seat */}
      <mesh position={[0, deskHeight - 0.2, 0]} castShadow>
        <boxGeometry args={[0.8, 0.15, 0.8]} />
        <meshStandardMaterial color="#8B4513" roughness={0.4} />
      </mesh>
      
      {/* High Back Rest */}
      <mesh position={[0, deskHeight + 0.35, 0.4]} castShadow>
        <boxGeometry args={[0.8, 1.2, 0.12]} />
        <meshStandardMaterial color="#8B4513" roughness={0.4} />
      </mesh>
      
      {/* Padded Armrests */}
      <mesh position={[-0.5, deskHeight + 0.05, 0]} castShadow>
        <boxGeometry args={[0.12, 0.35, 0.6]} />
        <meshStandardMaterial color="#8B4513" roughness={0.4} />
      </mesh>
      <mesh position={[0.5, deskHeight + 0.05, 0]} castShadow>
        <boxGeometry args={[0.12, 0.35, 0.6]} />
        <meshStandardMaterial color="#8B4513" roughness={0.4} />
      </mesh>
      
      {/* Base */}
      <mesh position={[0, (deskHeight - 0.2) / 2, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, deskHeight - 0.2, 8]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.2} metalness={0.9} />
      </mesh>
      
      {/* Gold Star Base */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.06, 5]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.2} metalness={0.9} />
      </mesh>
    </group>
  );
}

// ==========================================
// MONITOR MODELS
// ==========================================

// Monitor Model 1: Standard 24" Monitor
function MonitorStandard3D({ deskHeight = 0.75 }: { deskHeight?: number }) {
  return (
    <group position={[0, 0, -0.3]}>
      {/* Monitor Screen */}
      <mesh position={[0, deskHeight + 0.55, 0]} castShadow>
        <boxGeometry args={[1.0, 0.6, 0.05]} />
        <meshStandardMaterial color="#1A202C" roughness={0.3} />
      </mesh>
      
      {/* Screen Display */}
      <mesh position={[0, deskHeight + 0.55, 0.03]}>
        <boxGeometry args={[0.9, 0.5, 0.02]} />
        <meshStandardMaterial color="#4299E1" emissive="#4299E1" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Monitor Stand */}
      <mesh position={[0, deskHeight + 0.25, 0]} castShadow>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color="#4A5568" roughness={0.5} />
      </mesh>
      
      {/* Monitor Base */}
      <mesh position={[0, deskHeight + 0.02, 0]} castShadow>
        <boxGeometry args={[0.4, 0.03, 0.25]} />
        <meshStandardMaterial color="#4A5568" roughness={0.5} />
      </mesh>
    </group>
  );
}

// Monitor Model 2: Ultrawide Monitor
function MonitorUltrawide3D({ deskHeight = 0.75 }: { deskHeight?: number }) {
  return (
    <group position={[0, 0, -0.3]}>
      {/* Ultrawide Screen */}
      <mesh position={[0, deskHeight + 0.55, 0]} castShadow>
        <boxGeometry args={[1.6, 0.7, 0.05]} />
        <meshStandardMaterial color="#1A202C" roughness={0.3} />
      </mesh>
      
      {/* Screen Display */}
      <mesh position={[0, deskHeight + 0.55, 0.03]}>
        <boxGeometry args={[1.5, 0.6, 0.02]} />
        <meshStandardMaterial color="#4299E1" emissive="#4299E1" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Dual Stand */}
      <mesh position={[-0.3, deskHeight + 0.25, 0]} castShadow>
        <boxGeometry args={[0.06, 0.5, 0.06]} />
        <meshStandardMaterial color="#2D3748" roughness={0.4} />
      </mesh>
      <mesh position={[0.3, deskHeight + 0.25, 0]} castShadow>
        <boxGeometry args={[0.06, 0.5, 0.06]} />
        <meshStandardMaterial color="#2D3748" roughness={0.4} />
      </mesh>
      
      {/* Wide Base */}
      <mesh position={[0, deskHeight + 0.02, 0]} castShadow>
        <boxGeometry args={[0.8, 0.03, 0.3]} />
        <meshStandardMaterial color="#2D3748" roughness={0.4} />
      </mesh>
    </group>
  );
}

// ==========================================
// ACCESSORY MODELS
// ==========================================

// Lamp Model
function Lamp3D({ deskHeight = 0.75 }: { deskHeight?: number }) {
  return (
    <group position={[0.8, 0, -0.5]}>
      {/* Base */}
      <mesh position={[0, deskHeight + 0.03, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.03, 16]} />
        <meshStandardMaterial color="#4A5568" roughness={0.4} metalness={0.6} />
      </mesh>
      
      {/* Arm */}
      <mesh position={[0, deskHeight + 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
        <meshStandardMaterial color="#4A5568" roughness={0.4} metalness={0.6} />
      </mesh>
      
      {/* Lamp Head */}
      <mesh position={[0, deskHeight + 0.65, 0.1]} castShadow>
        <boxGeometry args={[0.25, 0.05, 0.15]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.3} />
      </mesh>
      
      {/* Light */}
      <mesh position={[0, deskHeight + 0.63, 0.1]}>
        <boxGeometry args={[0.2, 0.02, 0.12]} />
        <meshStandardMaterial color="#F6E05E" emissive="#F6E05E" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

// Plant Model
function Plant3D({ deskHeight = 0.75 }: { deskHeight?: number }) {
  return (
    <group position={[-0.9, 0, -0.4]}>
      {/* Pot */}
      <mesh position={[0, deskHeight + 0.1, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.1, 0.2, 12]} />
        <meshStandardMaterial color="#D69E2E" roughness={0.7} />
      </mesh>
      
      {/* Soil */}
      <mesh position={[0, deskHeight + 0.2, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.02, 12]} />
        <meshStandardMaterial color="#4A3728" roughness={0.9} />
      </mesh>
      
      {/* Plant Leaves */}
      <mesh position={[0, deskHeight + 0.4, 0]} castShadow>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#48BB78" roughness={0.8} />
      </mesh>
      <mesh position={[0.08, deskHeight + 0.5, 0.05]} castShadow>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#38A169" roughness={0.8} />
      </mesh>
      <mesh position={[-0.08, deskHeight + 0.45, -0.05]} castShadow>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshStandardMaterial color="#48BB78" roughness={0.8} />
      </mesh>
    </group>
  );
}

// Keyboard Model
function Keyboard3D({ deskHeight = 0.75 }: { deskHeight?: number }) {
  return (
    <group position={[0, 0, 0.2]}>
      <mesh position={[0, deskHeight + 0.03, 0]} castShadow>
        <boxGeometry args={[0.6, 0.03, 0.2]} />
        <meshStandardMaterial color="#2D3748" roughness={0.6} />
      </mesh>
    </group>
  );
}

// Coffee Mug Model
function CoffeeMug3D({ deskHeight = 0.75 }: { deskHeight?: number }) {
  return (
    <group position={[0.6, 0, 0.3]}>
      {/* Mug Body */}
      <mesh position={[0, deskHeight + 0.07, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.12, 12]} />
        <meshStandardMaterial color="#E53E3E" roughness={0.5} />
      </mesh>
      
      {/* Handle */}
      <mesh position={[0.08, deskHeight + 0.07, 0]} castShadow>
        <torusGeometry args={[0.04, 0.015, 8, 12, Math.PI]} />
        <meshStandardMaterial color="#E53E3E" roughness={0.5} />
      </mesh>
    </group>
  );
}

// ==========================================
// MAIN WORKSPACE SCENE
// ==========================================

interface WorkspaceSceneProps {
  placedItems: WorkspaceItem[];
}

export default function WorkspaceScene({ placedItems = [] }: WorkspaceSceneProps) {
  // Get specific items by ID
  const deskItem = placedItems.find(item => item.category === 'desks');
  const chairItem = placedItems.find(item => item.category === 'chairs');
  const monitorItem = placedItems.find(item => item.category === 'monitors');
  const accessoryItems = placedItems.filter(item => item.category === 'accessories');

  // Determine desk height based on selection
  const deskHeight = deskItem?.id === 'desk-3' ? 1.1 : 0.75;

  return (
    <group>
      {/* Floor - Smaller room */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#2D3748" roughness={0.8} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 2, -3]} receiveShadow>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial color="#4A5568" roughness={0.9} side={2} transparent opacity={0.5} />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-4, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial color="#3D4F5F" roughness={0.9} side={2} transparent opacity={0.5} />
      </mesh>

      {/* Right Wall */}
      <mesh position={[4, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial color="#3D4F5F" roughness={0.9} side={2} transparent opacity={0.5} />
      </mesh>

      {/* Baseboard - Back Wall */}
      <mesh position={[0, 0.1, -2.95]}>
        <boxGeometry args={[8, 0.2, 0.05]} />
        <meshStandardMaterial color="#1A202C30" roughness={0.7} />
      </mesh>

      {/* Baseboard - Left Wall */}
      <mesh position={[-3.95, 0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[6, 0.2, 0.05]} />
        <meshStandardMaterial color="#1A202C30" roughness={0.7} />
      </mesh>

      {/* Baseboard - Right Wall */}
      <mesh position={[3.95, 0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[6, 0.2, 0.05]} />
        <meshStandardMaterial color="#1A202C20" roughness={0.7} />
      </mesh>

      {/* Render Desk based on selection - positioned near back wall */}
      {deskItem?.id === 'desk-1' && <DeskStandard3D />}
      {deskItem?.id === 'desk-2' && <DeskLShaped3D />}
      {deskItem?.id === 'desk-3' && <DeskStanding3D />}

      {/* Render Chair based on selection - positioned in front of desk */}
      {chairItem?.id === 'chair-1' && <ChairOffice3D deskHeight={deskHeight} />}
      {chairItem?.id === 'chair-2' && <ChairErgonomic3D deskHeight={deskHeight} />}
      {chairItem?.id === 'chair-3' && <ChairExecutive3D deskHeight={deskHeight} />}

      {/* Render Monitor based on selection - positioned on desk */}
      {monitorItem?.id === 'monitor-1' && <MonitorStandard3D deskHeight={deskHeight} />}
      {(monitorItem?.id === 'monitor-2' || monitorItem?.id === 'monitor-3') && <MonitorUltrawide3D deskHeight={deskHeight} />}

      {/* Render Accessories based on selection - all can be selected */}
      {accessoryItems.some(item => item.id === 'acc-1') && <Lamp3D deskHeight={deskHeight} />}
      {accessoryItems.some(item => item.id === 'acc-2') && <Plant3D deskHeight={deskHeight} />}
      {accessoryItems.some(item => item.id === 'acc-3') && <CoffeeMug3D deskHeight={deskHeight} />}
      {accessoryItems.some(item => item.id === 'acc-4') && <Keyboard3D deskHeight={deskHeight} />}

      {/* Empty state placeholder */}
      {placedItems.length === 0 && (
        <group position={[0, 0.5, 0]}>
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="#4A5568" transparent opacity={0.3} />
          </mesh>
        </group>
      )}
    </group>
  );
}
