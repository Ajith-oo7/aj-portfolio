
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sparkles, Environment as DreiEnvironment, useTexture } from '@react-three/drei';
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
      ref.current.scale.x = 0.85 + 0.15 * Math.sin(t * 2);
      ref.current.scale.y = 0.85 + 0.15 * Math.sin(t * 2 + 0.3);
      ref.current.scale.z = 0.85 + 0.15 * Math.sin(t * 2 + 0.6);
      
      ref.current.rotation.x = Math.sin(t * 0.5) * 0.2;
      ref.current.rotation.z = Math.sin(t * 0.3) * 0.2;
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
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          color={hovered ? '#ffffff' : color} 
          emissive={color}
          emissiveIntensity={hovered ? 2.5 : clicked ? 1.8 : 1}
          roughness={0.2}
          metalness={0.8}
        />
        {hovered && (
          <Sparkles 
            count={20} 
            scale={[2, 2, 2]} 
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
          renderOrder={2}
          outlineWidth={0.008}
          outlineColor="#000000"
          maxWidth={1}
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
  speed?: number;
}

const DataEdge: React.FC<EdgeProps> = ({ 
  start, 
  end, 
  color = '#1EAEDB',
  width = 0.05,
  speed = 1
}) => {
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];
  
  // Create arc-like curves that follow the globe's surface
  const midPoint = new THREE.Vector3().addVectors(
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ).multiplyScalar(0.5);
  
  // Push the midpoint out to follow the globe's curvature
  midPoint.normalize().multiplyScalar(2.8 + Math.random() * 0.2);
  
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(...start),
    midPoint,
    new THREE.Vector3(...end)
  );
  
  const tubeGeometry = new THREE.TubeGeometry(curve, 20, width, 8, false);
  
  return (
    <mesh geometry={tubeGeometry}>
      <meshBasicMaterial
        color={color}
        transparent={true}
        opacity={0.6}
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
    <mesh ref={globeRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2.8, 64, 64]} />
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

// Custom OrbitControls wrapper to ensure it has access to camera
const ControlsWrapper = () => {
  const { camera, gl } = useThree();
  return (
    <OrbitControls 
      args={[camera, gl.domElement]}
      enableZoom={true}
      enablePan={false}
      autoRotate={false}
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
  nodeCount = 28,
  connections = 25, // Reduced from 45 to 25
  autoRotate = true
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  
  const nodes: NodeProps[] = [];
  const skills = [
    'SQL', 'Python', 'Spark', 'ETL', 'AWS', 
    'Hadoop', 'Kafka', 'Airflow', 'NoSQL', 
    'Tableau', 'ML', 'Data', 'dbt', 'Snowflake',
    'Docker', 'Kubernetes', 'TensorFlow', 'PyTorch', 
    'React', 'TypeScript', 'NextJS', 'Supabase',
    'Git', 'Jenkins', 'Terraform', 'MongoDB', 'Grafana',
    'Prometheus'
  ];
  
  // Place nodes on the globe surface with consistent spacing
  for (let i = 0; i < nodeCount; i++) {
    // Create a more even distribution of points on a sphere (Fibonacci sphere)
    const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
    
    // Use a fixed radius for the globe
    const radius = 3;
    
    // Convert spherical to Cartesian coordinates
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    const colors = ['#1EAEDB', '#8B5CF6', '#D946EF', '#F97316', '#10B981', '#EC4899', '#0EA5E9', '#F59E0B'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    nodes.push({
      position: [x, y, z],
      color,
      size: 0.12 + Math.random() * 0.15,
      label: skills[i % skills.length],
      pulse: Math.random() > 0.5, // Reduced pulsing nodes
      onClick: () => setActiveNode(activeNode === i ? null : i)
    });
  }
  
  const edges: EdgeProps[] = [];
  
  // Connect nodes in a ring around the globe - only adjacent nodes
  for (let i = 0; i < nodes.length; i += 2) { // Skip every other node to reduce density
    const nextIndex = (i + 2) % nodes.length;
    
    edges.push({
      start: nodes[i].position,
      end: nodes[nextIndex].position,
      color: nodes[i].color,
      width: 0.02 + Math.random() * 0.02, // Thinner lines
      speed: 0.5 + Math.random() * 1.5
    });
  }
  
  // Connect similar technology nodes - but be more selective
  const techGroups = {
    'data': ['SQL', 'ETL', 'Data', 'dbt', 'Snowflake'],
    'cloud': ['AWS', 'Docker', 'Kubernetes'],
    'ml': ['ML', 'TensorFlow', 'PyTorch'],
    'frontend': ['React', 'TypeScript', 'NextJS'],
  };
  
  // Find nodes by label
  const findNodeByLabel = (label: string) => {
    return nodes.findIndex(node => node.label === label);
  };
  
  // Connect within groups but with fewer connections
  Object.values(techGroups).forEach(group => {
    // Instead of connecting every node to every other node, just connect them in sequence
    for (let i = 0; i < group.length - 1; i++) {
      const startIdx = findNodeByLabel(group[i]);
      const endIdx = findNodeByLabel(group[i + 1]);
      
      if (startIdx !== -1 && endIdx !== -1) {
        edges.push({
          start: nodes[startIdx].position,
          end: nodes[endIdx].position,
          color: nodes[startIdx].color,
          width: 0.01 + Math.random() * 0.01, // Even thinner lines
          speed: 0.5 + Math.random() * 1.5
        });
      }
    }
  });
  
  // Add a few cross-discipline connections, but far fewer than before
  const remainingConnections = Math.min(10, connections - edges.length); // Cap at 10 additional connections
  for (let i = 0; i < remainingConnections; i++) {
    const startIndex = Math.floor(Math.random() * nodes.length);
    let endIndex = Math.floor(Math.random() * nodes.length);
    
    while (endIndex === startIndex) {
      endIndex = Math.floor(Math.random() * nodes.length);
    }
    
    edges.push({
      start: nodes[startIndex].position,
      end: nodes[endIndex].position,
      color: nodes[startIndex].color,
      width: 0.01, // Fixed thin width
      speed: 0.5 + Math.random() * 1.5
    });
  }
  
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      
      // Add a slight tilt animation
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.08) * 0.03;
    }
  });
  
  return (
    <group ref={groupRef}>
      <GlobeBase />
      
      {/* Create atmospheric glow */}
      <mesh>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshPhongMaterial 
          color="#4a88e5"
          transparent={true}
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>
      
      {nodes.map((node, idx) => (
        <DataNode key={`node-${idx}`} {...node} />
      ))}
      {edges.map((edge, idx) => (
        <DataEdge key={`edge-${idx}`} {...edge} />
      ))}
      
      <Sparkles 
        count={200} 
        scale={[6, 6, 6]} 
        size={0.2} 
        speed={0.3} 
        color="#ffffff" 
        opacity={0.3}
      />
    </group>
  );
};

const CustomEnvironment = () => {
  return (
    <>
      <fog attach="fog" args={['#000000', 5, 15]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
      <pointLight position={[5, -5, 5]} intensity={0.5} color="#F97316" />
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
          gl.setClearColor(new THREE.Color('#000000'), 0);
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.2;
        }}
        onError={() => setHasError(true)}
        shadows
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
