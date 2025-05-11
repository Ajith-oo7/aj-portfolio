
import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sparkles } from '@react-three/drei';

interface NodeProps {
  position: THREE.Vector3;
  size?: number;
  color?: string;
  label?: string;
  pulsate?: boolean;
}

const Node: React.FC<NodeProps> = ({ 
  position, 
  size = 0.2, 
  color = '#ffffff', 
  label,
  pulsate = true 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current && pulsate) {
      meshRef.current.scale.setScalar(
        1.0 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1
      );
    }
    
    if (hovered && meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={hovered ? 0.6 : 0.2}
        roughness={0.2}
        metalness={0.8}
      />
      
      {label && (
        <Float
          speed={5}
          rotationIntensity={0.2}
          floatIntensity={0.2}
          position={new THREE.Vector3(0, size * 2, 0)}
        >
          <Text
            color={color}
            fontSize={0.15}
            maxWidth={2}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign="center"
            anchorY="bottom"
          >
            {label}
          </Text>
        </Float>
      )}
    </mesh>
  );
};

interface EdgeProps {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color?: string;
  width?: number;
}

const Edge: React.FC<EdgeProps> = ({ 
  start, 
  end, 
  color = '#1EAEDB',
  width = 0.05
}) => {
  const midPoint = new THREE.Vector3().addVectors(
    start,
    end
  ).multiplyScalar(0.5);
  
  midPoint.normalize().multiplyScalar(3.0);
  
  const curve = new THREE.QuadraticBezierCurve3(
    start,
    midPoint,
    end
  );
  
  const tubeGeometry = new THREE.TubeGeometry(curve, 20, width, 8, false);
  
  return (
    <mesh>
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.7}
      />
      <primitive object={tubeGeometry} attach="geometry" />
    </mesh>
  );
};

const NetworkNode: React.FC<NodeProps> = ({ position, size, color, label }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.005;
    }
  });
  
  return (
    <mesh 
      ref={mesh}
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereGeometry args={[size || 0.2, 24, 24]} />
      <meshPhongMaterial 
        color={color || '#ffffff'} 
        emissive={hovered ? color : '#000000'}
      />
    </mesh>
  );
};

interface NetworkData {
  nodes: {
    position: THREE.Vector3;
    color: string;
    size: number;
    label: string;
  }[];
  edges: {
    start: number;
    end: number;
  }[];
}

interface DataViz3DProps {
  rotate?: boolean;
}

const Skills3D: React.FC = () => {
  const [rotationSpeed, setRotationSpeed] = useState(0.001);
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  
  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.position.set(0, 0, 8);
    }
  }, [camera]);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
      groupRef.current.rotation.x += rotationSpeed * 0.5;
    }
  });
  
  // Generate network data
  const networkData = React.useMemo(() => {
    const nodes: NetworkData['nodes'] = [];
    const edges: NetworkData['edges'] = [];
    
    const nodeCount = 20;
    const maxConnections = 3;
    
    // Set of skills for labels
    const skills = [
      "Python", "SQL", "React", "Spark", "Airflow",
      "AWS", "Snowflake", "Kafka", "Docker", "ETL",
      "TensorFlow", "ML", "DataOps", "Visualization", "NoSQL",
      "Git", "CI/CD", "Kubernetes", "ELK", "REST"
    ];
    
    // Generate nodes in a spherical formation
    const colors = ['#1EAEDB', '#3D5AFE', '#8B5CF6', '#EC4899', '#F471B5'];
    
    // Create nodes in a spherical arrangement
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      
      const x = 4 * Math.cos(theta) * Math.sin(phi);
      const y = 4 * Math.sin(theta) * Math.sin(phi);
      const z = 4 * Math.cos(phi);
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      nodes.push({
        position: new THREE.Vector3(x, y, z),
        color,
        size: 0.15 + Math.random() * 0.1,
        label: skills[i % skills.length],
      });
    }
    
    // Generate edges between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      const connections = Math.floor(Math.random() * maxConnections) + 1;
      for (let j = 0; j < connections; j++) {
        const target = (i + 1 + Math.floor(Math.random() * (nodes.length - 2))) % nodes.length;
        if (i !== target) {
          edges.push({
            start: i,
            end: target,
          });
        }
      }
    }
    
    return { nodes, edges };
  }, []);

  return (
    <group ref={groupRef}>
      {networkData.nodes.map((node, index) => (
        <Node 
          key={index} 
          position={node.position}
          color={node.color}
          size={node.size}
          label={node.label}
        />
      ))}
      
      {networkData.edges.map((edge, index) => (
        <Edge 
          key={index}
          start={networkData.nodes[edge.start].position}
          end={networkData.nodes[edge.end].position}
          color="#1EAEDB"
          width={0.02}
        />
      ))}
    </group>
  );
};

const SkillsConnection: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      <Sparkles
        count={100}
        scale={10}
        size={1}
        speed={0.3}
        color="#8B5CF6"
      />
    </group>
  );
};

const DataViz3D: React.FC<DataViz3DProps> = ({ rotate = true }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="h-[300px] flex items-center justify-center bg-black/20 rounded-lg">
        <p className="text-gray-400 text-center">
          3D visualization could not be loaded.
          <br />
          <span className="text-sm text-gray-500">
            Try refreshing the page or using a different browser.
          </span>
        </p>
      </div>
    );
  }
  
  return (
    <div className="w-full h-[300px] neo-blur border border-white/10 rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        onError={() => setHasError(true)}
      >
        <color attach="background" args={[0, 0, 0]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
        
        <Skills3D />
        <SkillsConnection />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={rotate}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </Canvas>
    </div>
  );
};

export default DataViz3D;
