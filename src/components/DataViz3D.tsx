import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Trail, useTrail, Float, Sparkles } from '@react-three/drei';
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
  const ref = useRef<THREE.Line>(null);
  
  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(color) },
      time: { value: 0 },
      width: { value: width }
    },
    vertexShader: `
      uniform float time;
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform float time;
      uniform float width;
      varying vec3 vPosition;
      void main() {
        float intensity = 0.5 + 0.5 * sin(vPosition.x * 10.0 + time * 2.0);
        vec3 glowColor = mix(color, vec3(1.0), 0.3 * intensity);
        gl_FragColor = vec4(glowColor, 0.2 + 0.6 * intensity);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending
  });
  
  useFrame((state) => {
    if (shaderMaterial) {
      shaderMaterial.uniforms.time.value = state.clock.getElapsedTime() * speed;
    }
  });
  
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];
  
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(...start),
    new THREE.Vector3(
      (start[0] + end[0]) / 2 + (Math.random() - 0.5) * 0.5,
      (start[1] + end[1]) / 2 + (Math.random() - 0.5) * 0.5,
      (start[2] + end[2]) / 2 + (Math.random() - 0.5) * 0.5
    ),
    new THREE.Vector3(...end)
  ]);
  
  const tubeGeometry = new THREE.TubeGeometry(curve, 20, width, 8, false);
  
  return (
    <mesh geometry={tubeGeometry}>
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
};

interface DataNetworkProps {
  nodeCount?: number;
  connections?: number;
  autoRotate?: boolean;
}

const DataNetwork: React.FC<DataNetworkProps> = ({ 
  nodeCount = 14,
  connections = 25,
  autoRotate = true
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  
  const nodes: NodeProps[] = [];
  const skills = [
    'SQL', 'Python', 'Spark', 'ETL', 'AWS', 
    'Hadoop', 'Kafka', 'Airflow', 'NoSQL', 
    'Tableau', 'ML', 'Data', 'dbt', 'Snowflake'
  ];
  
  for (let i = 0; i < nodeCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / nodeCount);
    const theta = Math.sqrt(nodeCount * Math.PI) * phi;
    
    const radius = 2.5 + Math.sin(i * 5) * 0.3;
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    const colors = ['#1EAEDB', '#8B5CF6', '#D946EF', '#F97316'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    nodes.push({
      position: [x, y, z],
      color,
      size: 0.15 + Math.random() * 0.2,
      label: skills[i % skills.length],
      pulse: Math.random() > 0.3,
      onClick: () => setActiveNode(activeNode === i ? null : i)
    });
  }
  
  const edges: EdgeProps[] = [];
  
  for (let i = 0; i < nodes.length; i++) {
    const nextIndex = (i + 1) % nodes.length;
    
    edges.push({
      start: nodes[i].position,
      end: nodes[nextIndex].position,
      color: nodes[i].color,
      width: 0.02 + Math.random() * 0.03,
      speed: 0.5 + Math.random() * 1.5
    });
  }
  
  const randomConnections = connections - nodes.length;
  for (let i = 0; i < randomConnections; i++) {
    const startIndex = Math.floor(Math.random() * nodes.length);
    let endIndex = Math.floor(Math.random() * nodes.length);
    
    while (endIndex === startIndex) {
      endIndex = Math.floor(Math.random() * nodes.length);
    }
    
    edges.push({
      start: nodes[startIndex].position,
      end: nodes[endIndex].position,
      color: nodes[startIndex].color,
      width: 0.01 + Math.random() * 0.02,
      speed: 0.5 + Math.random() * 1.5
    });
  }
  
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.03;
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
      
      <Sparkles 
        count={100} 
        scale={[5, 5, 5]} 
        size={0.2} 
        speed={0.3} 
        color="#ffffff" 
        opacity={0.3}
      />
    </group>
  );
};

const Environment = () => {
  return (
    <>
      <fog attach="fog" args={['#000000', 5, 15]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B5CF6" />
      <pointLight position={[5, -5, 5]} intensity={0.5} color="#F97316" />
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
        camera={{ position: [0, 0, 6], fov: 45 }}
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
        <Environment />
        <React.Suspense fallback={null}>
          <DataNetwork />
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            autoRotate={false}
            rotateSpeed={0.5}
            zoomSpeed={0.8}
            minDistance={4}
            maxDistance={10}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default DataViz3D;
