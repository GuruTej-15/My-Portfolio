'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';

interface Node3DData {
  id: string;
  name: string;
  pos: [number, number, number];
  color: string;
  size: number;
}

const nodesData: Node3DData[] = [
  { id: 'next', name: 'Next.js 16', pos: [0, 1.4, 0.2], color: '#FFFFFF', size: 0.42 },
  { id: 'react', name: 'React 19', pos: [-1.8, 0.9, -0.2], color: '#D3E8E6', size: 0.36 },
  { id: 'node', name: 'Node.js', pos: [1.8, 1.1, -0.1], color: '#E9F6F5', size: 0.36 },
  { id: 'devops', name: 'DevOps / K8s', pos: [-1.2, -1.2, 0.3], color: '#D49879', size: 0.38 },
  { id: 'cpp', name: 'C / C++', pos: [-2.1, -0.2, 0.1], color: '#D3E8E6', size: 0.34 },
  { id: 'mongo', name: 'MongoDB', pos: [2.0, -0.4, 0.2], color: '#E9F6F5', size: 0.34 },
  { id: 'corecs', name: 'Core CS / OS', pos: [1.2, -1.3, -0.2], color: '#D3E8E6', size: 0.36 },
  { id: 'git', name: 'Git & VCS', pos: [0, -0.1, -0.4], color: '#FFFFFF', size: 0.32 },
];

const connectionPairs: [number, number][] = [
  [0, 1], // Next -> React
  [0, 2], // Next -> Node
  [0, 7], // Next -> Git
  [1, 4], // React -> C/C++
  [2, 5], // Node -> Mongo
  [2, 3], // Node -> DevOps
  [4, 3], // C/C++ -> DevOps
  [3, 6], // DevOps -> Core CS
  [6, 5], // Core CS -> Mongo
  [7, 3], // Git -> DevOps
  [7, 6], // Git -> Core CS
];

function NodeMesh({ node }: { node: Node3DData }) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group position={node.pos}>
      {/* Outer translucent mint halo */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[node.size, 24, 24]} />
        <meshPhysicalMaterial
          color={node.color}
          transmission={0.65}
          opacity={0.9}
          transparent
          roughness={0.25}
          ior={1.2}
          reflectivity={0.2}
        />
      </mesh>

      {/* Core solid pip */}
      <mesh>
        <sphereGeometry args={[node.size * 0.45, 16, 16]} />
        <meshStandardMaterial
          color={node.color === '#D49879' ? '#986953' : '#352A27'}
          roughness={0.4}
        />
      </mesh>

      {/* 3D Label */}
      <Text
        position={[0, -node.size - 0.25, 0]}
        fontSize={0.22}
        color="#352A27"
        anchorX="center"
        anchorY="top"
        font={undefined}
      >
        {node.name}
      </Text>
    </group>
  );
}

function ConnectionsLines() {
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
      <lineBasicMaterial color="#90A9A6" opacity={0.4} transparent linewidth={1} />
    </lineSegments>
  );
}

function SceneGroup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle mouse-following tilt
    const targetX = (state.pointer.x * Math.PI) / 14;
    const targetY = (state.pointer.y * Math.PI) / 16;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={1.4}
        rotationIntensity={0.2}
        floatIntensity={0.35}
        floatingRange={[-0.08, 0.08]}
      >
        <ConnectionsLines />
        {nodesData.map((node) => (
          <NodeMesh key={node.id} node={node} />
        ))}
      </Float>
    </group>
  );
}

export default function MintNodeNetwork() {
  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[440px] relative select-none">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 46 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'auto' }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 5, 4]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-3, -2, 2]} intensity={0.8} color="#D49879" />
        <pointLight position={[3, 2, -2]} intensity={0.6} color="#D3E8E6" />
        <SceneGroup />
      </Canvas>
    </div>
  );
}
