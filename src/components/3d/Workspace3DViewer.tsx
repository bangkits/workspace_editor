'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Environment, AxesHelper } from '@react-three/drei';
import { Suspense } from 'react';
import { WorkspaceItem } from '@/types/workspace';
import WorkspaceScene from './WorkspaceScene';

interface Workspace3DViewerProps {
  placedItems: WorkspaceItem[];
}

export default function Workspace3DViewer({ placedItems }: Workspace3DViewerProps) {
  return (
    <div className="w-full h-[600px] bg-gray-900 rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [6, 5, 6], fov: 50 }}
        shadows
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <pointLight position={[-10, 5, -5]} intensity={0.5} />

          {/* Environment */}
          <Environment preset="city" />

          {/* Grid Floor */}
          <Grid
            infiniteGrid
            fadeDistance={30}
            fadeStrength={5}
            cellSize={0.5}
            sectionSize={2}
            sectionColor={[0.5, 0.5, 0.5]}
            cellColor={[0.3, 0.3, 0.3]}
          />

          {/* 3D Workspace Scene */}
          <WorkspaceScene placedItems={placedItems || []} />

          {/* Orbit Controls */}
          <OrbitControls
            makeDefault
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={25}
            maxPolarAngle={Math.PI / 2}
            target={[0, 1, 0]}
          />
        </Suspense>
      </Canvas>

      {/* Controls Info */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
        <p>️ Left Click + Drag: Rotate View</p>
        <p>🖱️ Right Click + Drag: Pan View</p>
        <p>🖱️ Scroll: Zoom In/Out</p>
      </div>
    </div>
  );
}
