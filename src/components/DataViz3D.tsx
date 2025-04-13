
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

interface NodeProps {
  position: [number, number, number];
  size?: number;
  color?: string;
  label?: string;
  pulse?: boolean;
}

const DataNode: React.FC<NodeProps> = ({ position, size = 0.3, color = '#1EAEDB', label, pulse = false }) => {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (ref.current && pulse) {
      ref.current.scale.x = 0.9 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
      ref.current.scale.y = 0.9 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
      ref.current.scale.z = 0.9 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
    }
  });
  
  return (
    <group position={position}>
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          color={hovered ? '#ffffff' : color} 
          emissive={color}
          emissiveIntensity={hovered ? 2 : 1}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {label && (
        <Text
          position={[0, size + 0.1, 0]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="bottom"
        >
          {label}
        </Text>
      )}
    </group>
  );
};

interface EdgeProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}

const DataEdge: React.FC<EdgeProps> = ({ start, end, color = '#1EAEDB' }) => {
  const materialRef = useRef<THREE.LineBasicMaterial>(null);
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.opacity = 0.5 + Math.sin(state.clock.getElapsedTime() * 3) * 0.2;
    }
  });
  
  // Create points for the line
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];
  
  // Create geometry from points
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  
  return (
    <primitive object={new THREE.Line(
      lineGeometry,
      <lineBasicMaterial 
        ref={materialRef} 
        color={color} 
        transparent 
        opacity={0.7} 
        attach="material"
      />
    )} />
  );
};

interface DataNetworkProps {
  nodeCount?: number;
  connections?: number;
  autoRotate?: boolean;
}

const DataNetwork: React.FC<DataNetworkProps> = ({ 
  nodeCount = 12,
  connections = 15,
  autoRotate = true
}) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate nodes in a spherical pattern
  const nodes: NodeProps[] = [];
  const skills = ['SQL', 'Python', 'Spark', 'ETL', 'AWS', 'Hadoop', 'Kafka', 'Airflow', 'NoSQL', 'Tableau', 'ML', 'Data'];
  
  for (let i = 0; i < nodeCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 2.5 + Math.random() * 0.5;
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    const colors = ['#1EAEDB', '#8B5CF6', '#D946EF', '#F97316'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    nodes.push({
      position: [x, y, z],
      color,
      size: 0.15 + Math.random() * 0.15,
      label: skills[i % skills.length],
      pulse: Math.random() > 0.7,
    });
  }
  
  // Generate random connections
  const edges: EdgeProps[] = [];
  for (let i = 0; i < connections; i++) {
    const startIndex = Math.floor(Math.random() * nodes.length);
    let endIndex = Math.floor(Math.random() * nodes.length);
    while (endIndex === startIndex) {
      endIndex = Math.floor(Math.random() * nodes.length);
    }
    
    edges.push({
      start: nodes[startIndex].position,
      end: nodes[endIndex].position,
      color: nodes[startIndex].color,
    });
  }
  
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      {nodes.map((node, idx) => (
        <DataNode key={`node-${idx}`} {...node} />
      ))}
      {edges.map((edge, idx) => (
        <DataEdge key={`edge-${idx}`} {...edge} />
      ))}
    </group>
  );
};

// Fallback component to handle errors in 3D rendering
const Fallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-white text-center">
      <div className="text-2xl mb-2">Interactive Visualization</div>
      <div className="text-sm opacity-70">3D visualization could not be loaded</div>
    </div>
  </div>
);

const DataViz3D: React.FC<{ className?: string }> = ({ className }) => {
  // Using an error boundary pattern for React Three Fiber
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <Fallback />;
  }

  return (
    <div className={`w-full h-full ${className || ''}`}>
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#000000'));
        }}
        onError={() => setHasError(true)}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        <React.Suspense fallback={null}>
          <DataNetwork />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            rotateSpeed={0.5}
          />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default DataViz3D;
