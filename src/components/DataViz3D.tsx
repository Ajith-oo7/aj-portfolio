
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
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
      ref.current.scale.x = 0.9 + 0.1 * Math.sin(t * 1.5);
      ref.current.scale.y = 0.9 + 0.1 * Math.sin(t * 1.5 + 0.3);
      ref.current.scale.z = 0.9 + 0.1 * Math.sin(t * 1.5 + 0.6);
    }
  });
  
  const handleClick = () => {
    setClicked(!clicked);
    if (onClick) onClick();
  };
  
  return (
    <Float 
      speed={pulse ? 1 : 0.5} 
      rotationIntensity={0.1} 
      floatIntensity={0.2}
      position={position}
    >
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
        scale={clicked ? 1.1 : 1}
      >
        <sphereGeometry args={[size, 24, 24]} />
        <meshStandardMaterial 
          color={hovered ? '#FFFFFF' : color} 
          emissive={color}
          emissiveIntensity={hovered ? 1.5 : clicked ? 1.2 : 0.7}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
      {label && (
        <Text
          position={[0, size + 0.1, 0]}
          fontSize={0.08}
          color={hovered ? '#FFFFFF' : '#aaadb0'}
          anchorX="center"
          anchorY="bottom"
          renderOrder={2}
          outlineWidth={0.004}
          outlineColor="#1A1F2C"
          maxWidth={0.8}
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
  width = 0.02
}) => {
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];
  
  // Create a curve between the points with a slight bend
  const midPoint = new THREE.Vector3().addVectors(
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ).multiplyScalar(0.5);
  
  // Push the midpoint slightly away from the center
  midPoint.normalize().multiplyScalar(2.8 + Math.random() * 0.1);
  
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(...start),
    midPoint,
    new THREE.Vector3(...end)
  );
  
  const tubeGeometry = new THREE.TubeGeometry(curve, 16, width, 6, false);
  
  return (
    <mesh geometry={tubeGeometry}>
      <meshBasicMaterial
        color={color}
        transparent={true}
        opacity={0.3}
      />
    </mesh>
  );
};

const GlobeBase = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });
  
  return (
    <mesh ref={globeRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2.8, 48, 48]} />
      <meshPhongMaterial 
        color="#1A1F2C" 
        transparent={true}
        opacity={0.2}
        emissive="#304352"
        emissiveIntensity={0.3}
        wireframe={true}
      />
    </mesh>
  );
};

// This ensures OrbitControls accesses a valid camera and renderer
const ControlsWrapper = () => {
  const { camera, gl } = useThree();
  return (
    <OrbitControls 
      args={[camera, gl.domElement]}
      enableZoom={true}
      enablePan={false}
      autoRotate={true}
      autoRotateSpeed={0.2}
      rotateSpeed={0.5}
      zoomSpeed={0.8}
      minDistance={4}
      maxDistance={12}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={3 * Math.PI / 4}
    />
  );
};

interface DataNetworkProps {
  nodeCount?: number;
  connections?: number;
  autoRotate?: boolean;
}

const DataNetwork: React.FC<DataNetworkProps> = ({ 
  nodeCount = 12,  // Reduced for simplicity
  connections = 15, // Reduced for a cleaner look
  autoRotate = true
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  
  const nodes: NodeProps[] = [];
  const skills = [
    'SQL', 'Python', 'AWS', 'Data', 
    'React', 'Cloud', 'API', 
    'ETL', 'NoSQL', 'Tableau', 
    'TypeScript', 'Analytics'
  ];
  
  // Create nodes in a more structured, evenly distributed pattern
  for (let i = 0; i < nodeCount; i++) {
    const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
    
    const radius = 3;
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    // More professional color palette
    const colors = ['#1EAEDB', '#8B5CF6', '#D946EF', '#5DA3FA'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    nodes.push({
      position: [x, y, z],
      color,
      size: 0.1 + Math.random() * 0.05, // Smaller, more consistent nodes
      label: skills[i % skills.length],
      pulse: Math.random() > 0.7,
      onClick: () => setActiveNode(activeNode === i ? null : i)
    });
  }
  
  const edges: EdgeProps[] = [];
  
  // Create a backbone of connections along the circle
  for (let i = 0; i < nodes.length; i++) {
    const nextIndex = (i + 1) % nodes.length;
    
    edges.push({
      start: nodes[i].position,
      end: nodes[nextIndex].position,
      color: '#8E9196',
      width: 0.01
    });
  }
  
  // Add a few strategic cross-connections
  for (let i = 0; i < connections/2; i++) {
    const startIndex = Math.floor(Math.random() * nodes.length);
    let endIndex = Math.floor(Math.random() * nodes.length);
    
    // Avoid adjacent or identical connections
    while (endIndex === startIndex || 
           endIndex === (startIndex + 1) % nodes.length || 
           endIndex === (startIndex - 1 + nodes.length) % nodes.length) {
      endIndex = Math.floor(Math.random() * nodes.length);
    }
    
    edges.push({
      start: nodes[startIndex].position,
      end: nodes[endIndex].position,
      color: '#8E9196',
      width: 0.008 // Thinner connections for a cleaner look
    });
  }
  
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      
      // Subtle tilt animation
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.03;
    }
  });
  
  return (
    <group ref={groupRef}>
      <GlobeBase />
      
      {/* Background ambient sphere */}
      <mesh>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshPhongMaterial 
          color="#F1F0FB"
          transparent={true}
          opacity={0.01}
          side={THREE.BackSide}
        />
      </mesh>
      
      {nodes.map((node, idx) => (
        <DataNode key={`node-${idx}`} {...node} />
      ))}
      {edges.map((edge, idx) => (
        <DataEdge key={`edge-${idx}`} {...edge} />
      ))}
      
      {/* Reduced number of sparkles for cleaner look */}
      <Sparkles 
        count={40} 
        scale={[6, 6, 6]} 
        size={0.1} 
        speed={0.2} 
        color="#FFFFFF" 
        opacity={0.15}
      />
    </group>
  );
};

const CustomEnvironment = () => {
  return (
    <>
      {/* Dark fog that doesn't completely black out the scene */}
      <fog attach="fog" args={['#000000', 10, 20]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#F1F0FB" />
      <DreiEnvironment preset="city" background={false} />
    </>
  );
};

const Fallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-white text-center">
      <div className="text-xl mb-2">Data Network Visualization</div>
      <div className="text-sm opacity-70">Loading visualization...</div>
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
          alpha: true,
          logarithmicDepthBuffer: true,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#000000'), 0.1); // Slightly visible background
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.0;
        }}
        onError={() => setHasError(true)}
        shadows={false}
      >
        <color attach="background" args={['#000000']} />
        <CustomEnvironment />
        <React.Suspense fallback={null}>
          <DataNetwork />
          <ControlsWrapper />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default DataViz3D;
