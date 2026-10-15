'use client';

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';

interface Node3DData {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'systems' | 'cloud' | 'core';
  pos: [number, number, number];
  haloColor: string;
  coreColor: string;
  size: number;
  labelOffset: [number, number, number];
  anchorY: 'top' | 'bottom' | 'middle';
  anchorX: 'center' | 'left' | 'right';
  badge?: string;
}

// 8 Verified Ecosystem Nodes representing GuruTej's cross-project stack
const nodesData: Node3DData[] = [
  {
    id: 'next',
    name: 'Next.js 16',
    category: 'frontend',
    pos: [0, 0.72, 0.1],
    haloColor: '#FFFFFF',
    coreColor: '#2E8B57',
    size: 0.25,
    labelOffset: [0, 0.32, 0],
    anchorY: 'bottom',
    anchorX: 'center',
    badge: 'CORE',
  },
  {
    id: 'react',
    name: 'React 19',
    category: 'frontend',
    pos: [-1.22, 0.58, -0.05],
    haloColor: '#E9F6F5',
    coreColor: '#352A27',
    size: 0.21,
    labelOffset: [0, 0.28, 0],
    anchorY: 'bottom',
    anchorX: 'center',
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'backend',
    pos: [1.22, 0.58, -0.05],
    haloColor: '#E9F6F5',
    coreColor: '#352A27',
    size: 0.21,
    labelOffset: [0, 0.28, 0],
    anchorY: 'bottom',
    anchorX: 'center',
  },
  {
    id: 'git',
    name: 'Git & CI/CD',
    category: 'cloud',
    pos: [0, -0.04, 0.15],
    haloColor: '#FFFFFF',
    coreColor: '#352A27',
    size: 0.21,
    labelOffset: [0, -0.28, 0],
    anchorY: 'top',
    anchorX: 'center',
  },
  {
    id: 'cpp',
    name: 'C / C++',
    category: 'systems',
    pos: [-1.32, -0.22, 0.05],
    haloColor: '#D3E8E6',
    coreColor: '#986953',
    size: 0.21,
    labelOffset: [0, -0.28, 0],
    anchorY: 'top',
    anchorX: 'center',
  },
  {
    id: 'mongo',
    name: 'MongoDB',
    category: 'backend',
    pos: [1.32, -0.22, 0.05],
    haloColor: '#D3E8E6',
    coreColor: '#2E8B57',
    size: 0.21,
    labelOffset: [0, -0.28, 0],
    anchorY: 'top',
    anchorX: 'center',
  },
  {
    id: 'corecs',
    name: 'POSIX / OS',
    category: 'core',
    pos: [-0.68, -0.80, -0.1],
    haloColor: '#E9F6F5',
    coreColor: '#986953',
    size: 0.20,
    labelOffset: [0, -0.28, 0],
    anchorY: 'top',
    anchorX: 'center',
  },
  {
    id: 'devops',
    name: 'Kubernetes',
    category: 'cloud',
    pos: [0.68, -0.80, -0.1],
    haloColor: '#F5EBE6',
    coreColor: '#D49879',
    size: 0.22,
    labelOffset: [0, -0.28, 0],
    anchorY: 'top',
    anchorX: 'center',
    badge: 'K8S',
  },
];

// Architectural connection pairs reflecting real project integration
const connectionPairs: [number, number][] = [
  [0, 1], // Next.js -> React 19
  [0, 2], // Next.js -> Node.js
  [0, 3], // Next.js -> Git & CI/CD
  [1, 4], // React 19 -> C / C++
  [2, 5], // Node.js -> MongoDB
  [3, 7], // Git & CI/CD -> Kubernetes
  [3, 4], // Git & CI/CD -> C / C++
  [4, 6], // C / C++ -> POSIX / OS
  [6, 7], // POSIX / OS -> Kubernetes
  [2, 7], // Node.js -> Kubernetes
  [5, 7], // MongoDB -> Kubernetes
];

function NodeMesh({
  node,
  hoveredId,
  setHoveredId,
}: {
  node: Node3DData;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const isHovered = hoveredId === node.id;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const targetScale = isHovered ? 1.15 : 1.0;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 10);

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <group
      ref={meshRef}
      position={node.pos}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHoveredId(node.id);
      }}
      onPointerOut={() => setHoveredId(null)}
    >
      {/* Outer translucent mint/pearl glass sphere */}
      <mesh>
        <sphereGeometry args={[node.size, 32, 32]} />
        <meshPhysicalMaterial
          color={isHovered ? '#FFFFFF' : node.haloColor}
          transmission={0.65}
          opacity={0.92}
          transparent
          roughness={0.18}
          ior={1.22}
          reflectivity={0.25}
          clearcoat={0.3}
        />
      </mesh>

      {/* Decorative orbital ring for core anchor node */}
      {node.badge === 'CORE' && (
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[node.size * 1.35, node.size * 1.45, 32]} />
          <meshBasicMaterial color="#2E8B57" opacity={0.6} transparent side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* Core solid precision pip */}
      <mesh>
        <sphereGeometry args={[node.size * 0.42, 20, 20]} />
        <meshStandardMaterial
          color={isHovered ? '#2E8B57' : node.coreColor}
          metalness={0.15}
          roughness={0.35}
        />
      </mesh>

      {/* Crisp 3D SDF Label with pristine white outline for 100% legibility */}
      <Text
        position={node.labelOffset}
        fontSize={0.13}
        color={isHovered ? '#2E8B57' : '#352A27'}
        anchorX={node.anchorX}
        anchorY={node.anchorY}
        outlineWidth={0.014}
        outlineColor="#FDFDFD"
        letterSpacing={0.02}
        font={undefined}
      >
        {node.name}
      </Text>
    </group>
  );
}

function ConnectionsLines({ hoveredId }: { hoveredId: string | null }) {
  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    connectionPairs.forEach(([fromIdx, toIdx]) => {
      points.push(new THREE.Vector3(...nodesData[fromIdx].pos));
      points.push(new THREE.Vector3(...nodesData[toIdx].pos));
    });
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, []);

  return (
    <lineSegments geometry={lineGeometry}>
      <lineBasicMaterial
        color="#90A9A6"
        opacity={hoveredId ? 0.48 : 0.38}
        transparent
        linewidth={1}
      />
    </lineSegments>
  );
}

function SceneGroup({
  hoveredId,
  setHoveredId,
}: {
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Damped, strictly bounded pointer tilt (max ~6 degrees)
    const targetX = (state.pointer.x * Math.PI) / 28;
    const targetY = (state.pointer.y * Math.PI) / 32;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.04);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.04);
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={0.9}
        rotationIntensity={0.06}
        floatIntensity={0.12}
        floatingRange={[-0.02, 0.02]}
      >
        <ConnectionsLines hoveredId={hoveredId} />
        {nodesData.map((node) => (
          <NodeMesh
            key={node.id}
            node={node}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        ))}
      </Float>
    </group>
  );
}

export default function MintNodeNetwork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full h-full relative select-none cursor-default">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 36 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'auto' }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={1.3} />
        <directionalLight position={[3, 4, 3]} intensity={1.4} color="#FFFFFF" />
        <pointLight position={[-3, -2, 2]} intensity={0.7} color="#D49879" />
        <pointLight position={[3, 2, -2]} intensity={0.6} color="#D3E8E6" />
        <SceneGroup hoveredId={hoveredId} setHoveredId={setHoveredId} />
      </Canvas>
    </div>
  );
}
