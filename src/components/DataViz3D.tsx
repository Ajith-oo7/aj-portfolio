
import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sparkles } from '@react-three/drei';

interface NodeProps {
  position: [number, number, number];
  size?: number;
  color?: string;
  label?: string;
  pulse?: boolean;
  onClick?: () => void;
}

const DataNode: React.FC<NodeProps> = ({ 
  position, 
  size = 0.3, 
  color = '#1EAEDB', 
  label, 
  pulse = false,
  onClick 
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  useFrame((state) => {
    if (ref.current && pulse) {
      const t = state.clock.getElapsedTime();
      ref.current.scale.x = 0.85 + 0.15 * Math.sin(t * 2);
      ref.current.scale.y = 0.85 + 0.15 * Math.sin(t * 2 + 0.3);
      ref.current.scale.z = 0.85 + 0.15 * Math.sin(t * 2 + 0.6);
    }
  });
  
  const handleClick = () => {
    setClicked(!clicked);
    if (onClick) onClick();
  };
  
  return (
    <Float 
      speed={pulse ? 2 : 1} 
      rotationIntensity={0.2} 
      floatIntensity={0.3}
      position={position}
    >
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
        scale={clicked ? 1.2 : 1}
      >
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial 
          color={hovered ? '#ffffff' : color} 
          emissive={color}
          emissiveIntensity={hovered ? 2 : clicked ? 1.5 : 1}
          roughness={0.3}
        />
        {hovered && (
          <Sparkles 
            count={10} 
            scale={[1.5, 1.5, 1.5]} 
            size={0.4} 
            speed={0.3} 
            color={color} 
          />
        )}
      </mesh>
      {label && (
        <Text
          position={[0, size + 0.1, 0]}
          fontSize={0.1}
          color={hovered ? '#ffffff' : '#cccccc'}
          anchorX="center"
          anchorY="bottom"
        >
          {label}
        </Text>
      )}
    </Float>
  );
};

interface EdgeProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
  width?: number;
}

const DataEdge: React.FC<EdgeProps> = ({ 
  start, 
  end, 
  color = '#1EAEDB',
  width = 0.05
}) => {
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];
  
  const midPoint = new THREE.Vector3().addVectors(
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ).multiplyScalar(0.5);
  
  midPoint.normalize().multiplyScalar(3.0);
  
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(...start),
    midPoint,
    new THREE.Vector3(...end)
  );
  
  const tubeGeometry = new THREE.TubeGeometry(curve, 20, width, 8, false);
  
  return (
    <mesh geometry={tubeGeometry}>
      <meshStandardMaterial
        color={color}
        transparent={true}
        opacity={0.7}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

// Globe base component
const GlobeBase = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2.8, 32, 32]} />
      <meshPhongMaterial 
        color="#070c20" 
        transparent={true}
        opacity={0.3}
        emissive="#1a2b4a"
        emissiveIntensity={0.5}
        wireframe={false}
      />
    </mesh>
  );
};

// Controls wrapper with reduced complexity
const ControlsWrapper = () => (
  <OrbitControls 
    enableZoom={true}
    enablePan={false}
    rotateSpeed={0.5}
    zoomSpeed={0.8}
    minDistance={4}
    maxDistance={10}
  />
);

const skills = [
  'SQL', 'Python', 'Spark', 'ETL', 'AWS', 
  'React', 'TypeScript', 'NextJS', 'Data'
];

// Simplified visualization
const DataNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create fewer nodes
  const nodes: NodeProps[] = [];
  const nodeCount = 12;
  
  for (let i = 0; i < nodeCount; i++) {
    const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
    
    const radius = 3;
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    const colors = ['#1EAEDB', '#8B5CF6', '#F97316', '#10B981'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    nodes.push({
      position: [x, y, z],
      color,
      size: 0.15 + Math.random() * 0.1,
      label: skills[i % skills.length],
      pulse: Math.random() > 0.7
    });
  }
  
  // Create fewer edges
  const edges: EdgeProps[] = [];
  
  // Basic ring connections
  for (let i = 0; i < nodes.length; i++) {
    const nextIndex = (i + 1) % nodes.length;
    
    edges.push({
      start: nodes[i].position,
      end: nodes[nextIndex].position,
      color: nodes[i].color,
      width: 0.03 + Math.random() * 0.02
    });
  }
  
  // Add a few cross connections
  for (let i = 0; i < 6; i++) {
    const startIdx = Math.floor(Math.random() * nodes.length);
    let endIdx = Math.floor(Math.random() * nodes.length);
    
    // Avoid self connections
    while (endIdx === startIdx) {
      endIdx = Math.floor(Math.random() * nodes.length);
    }
    
    edges.push({
      start: nodes[startIdx].position,
      end: nodes[endIdx].position,
      color: nodes[startIdx].color,
      width: 0.02
    });
  }
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group ref={groupRef}>
      <GlobeBase />
      
      {/* Render edges first */}
      {edges.map((edge, idx) => (
        <DataEdge key={`edge-${idx}`} {...edge} />
      ))}
      
      {/* Then render nodes */}
      {nodes.map((node, idx) => (
        <DataNode key={`node-${idx}`} {...node} />
      ))}
      
      <Sparkles 
        count={100} 
        scale={[6, 6, 6]} 
        size={0.2} 
        speed={0.3} 
        color="#ffffff" 
        opacity={0.3}
      />
    </group>
  );
};

// Fallback component
const Fallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-white text-center">
      <div className="text-2xl mb-2">Interactive Visualization</div>
      <div className="text-sm opacity-70">Loading 3D view...</div>
    </div>
  </div>
);

const DataViz3D: React.FC<{ className?: string }> = ({ className }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <Fallback />;
  }

  return (
    <div className={`w-full h-full ${className || ''}`}>
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ 
          antialias: true,
          powerPreference: 'default',
          alpha: true
        }}
        onError={() => setHasError(true)}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
        <React.Suspense fallback={null}>
          <DataNetwork />
          <ControlsWrapper />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default DataViz3D;
