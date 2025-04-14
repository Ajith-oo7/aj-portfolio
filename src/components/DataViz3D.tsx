
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sparkles, Environment as DreiEnvironment } from '@react-three/drei';
import * as THREE from 'three';

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
  color = '#333333', 
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
    <mesh
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
      scale={clicked ? 1.2 : 1}
    >
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={hovered ? '#ffffff' : color} 
        emissive={color}
        emissiveIntensity={hovered ? 1.5 : clicked ? 1.2 : 0.5}
        roughness={0.4}
        metalness={0.6}
      />
      {label && hovered && (
        <Text
          position={[0, size + 0.1, 0]}
          fontSize={0.08}
          color="#ffffff"
          anchorX="center"
          anchorY="bottom"
          renderOrder={2}
          outlineWidth={0.008}
          outlineColor="#000000"
          maxWidth={1}
        >
          {label}
        </Text>
      )}
    </mesh>
  );
};

interface EdgeProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
  width?: number;
}

// Fixed DataEdge component to use THREE.Line properly
const DataEdge: React.FC<EdgeProps> = ({ 
  start, 
  end, 
  color = '#333333',
  width = 0.01
}) => {
  // Create a geometry from points
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];
  
  // Create the line geometry
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  
  // Use the mesh directly to avoid the "lov" error
  return (
    <group>
      <mesh geometry={lineGeometry}>
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

// Wireframe globe
const GlobeBase = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <mesh ref={globeRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2.8, 32, 32]} />
      <meshBasicMaterial 
        color="#333333" 
        wireframe={true}
        transparent
        opacity={0.15}
      />
    </mesh>
  );
};

interface DataNetworkProps {
  nodeCount?: number;
  connections?: number;
  autoRotate?: boolean;
}

const DataNetwork: React.FC<DataNetworkProps> = ({ 
  nodeCount = 80,
  connections = 120,
  autoRotate = true
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  
  const nodes: NodeProps[] = [];
  const skills = [
    'SQL', 'Python', 'Spark', 'ETL', 'AWS', 'Hadoop', 'Kafka', 'Airflow', 
    'NoSQL', 'Tableau', 'ML', 'Data', 'dbt', 'Snowflake', 'Docker', 
    'Kubernetes', 'TensorFlow', 'PyTorch', 'React', 'TypeScript', 
    'NextJS', 'Supabase', 'Git', 'Jenkins', 'Terraform', 'MongoDB', 
    'Grafana', 'Prometheus', 'Redis', 'Go', 'Rust', 'Vue', 'Angular', 
    'Django', 'Flask', 'FastAPI', 'Node.js', 'Express', 'Laravel', 
    'Spring Boot'
  ];
  
  // Fibonacci sphere distribution for more even node placement
  for (let i = 0; i < nodeCount; i++) {
    // Golden ratio based point distribution on sphere
    const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
    
    const radius = 2.8;
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    // Determine node size - vary sizes to match reference image
    let size;
    if (i % 15 === 0) {
      size = 0.12; // Larger nodes
    } else if (i % 5 === 0) {
      size = 0.08; // Medium nodes
    } else {
      size = 0.04; // Small nodes
    }
    
    nodes.push({
      position: [x, y, z],
      color: '#333333',
      size,
      label: i < skills.length ? skills[i] : undefined,
      pulse: false,
      onClick: () => setActiveNode(activeNode === i ? null : i)
    });
  }
  
  const edges: EdgeProps[] = [];
  
  // Create connections between nodes
  for (let i = 0; i < connections; i++) {
    const startIndex = Math.floor(Math.random() * nodes.length);
    let endIndex = Math.floor(Math.random() * nodes.length);
    
    // Avoid self-connections
    while (endIndex === startIndex) {
      endIndex = Math.floor(Math.random() * nodes.length);
    }
    
    // Ensure we're not creating too many connections from a single node
    const connectionsFromStart = edges.filter(
      edge => 
        edge.start[0] === nodes[startIndex].position[0] &&
        edge.start[1] === nodes[startIndex].position[1] &&
        edge.start[2] === nodes[startIndex].position[2]
    ).length;
    
    if (connectionsFromStart < 5) {
      edges.push({
        start: nodes[startIndex].position,
        end: nodes[endIndex].position,
        color: '#333333',
        width: 0.01
      });
    }
  }
  
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group ref={groupRef}>
      <GlobeBase />
      
      {/* Render edges first so they appear behind nodes */}
      {edges.map((edge, idx) => (
        <DataEdge key={`edge-${idx}`} {...edge} />
      ))}
      
      {/* Then render nodes */}
      {nodes.map((node, idx) => (
        <DataNode key={`node-${idx}`} {...node} />
      ))}
    </group>
  );
};

const CustomEnvironment = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <DreiEnvironment preset="city" background={false} />
    </>
  );
};

const Fallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-white text-center">
      <div className="text-2xl mb-2">Interactive Visualization</div>
      <div className="text-sm opacity-70">3D visualization could not be loaded</div>
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
          powerPreference: 'high-performance',
          alpha: true,
          logarithmicDepthBuffer: true,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#f5f5f5'), 1);
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.2;
        }}
        onError={() => setHasError(true)}
      >
        <color attach="background" args={['#f5f5f5']} />
        <CustomEnvironment />
        <React.Suspense fallback={null}>
          <DataNetwork />
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
            rotateSpeed={0.5}
            zoomSpeed={0.8}
            minDistance={4}
            maxDistance={12}
          />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default DataViz3D;
