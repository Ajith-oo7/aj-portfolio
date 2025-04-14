
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const DataNode: React.FC<{
  position: [number, number, number];
  color?: string;
  label?: string;
}> = ({ 
  position, 
  color = '#8B5CF6', 
  label 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      const scale = 1 + (hovered ? 0.1 * Math.sin(t * 5) : 0);
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={position}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial 
          color={hovered ? '#FFFFFF' : color} 
          emissive={color}
          emissiveIntensity={hovered ? 1.2 : 0.7}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
      {label && (
        <Text
          position={[0, 0.3, 0]}
          fontSize={0.1}
          color="#aaadb0"
          anchorX="center"
          anchorY="bottom"
        >
          {label}
        </Text>
      )}
    </group>
  );
};

const DataNetwork: React.FC = () => {
  const skills = [
    'Python', 'React', 'AWS', 
    'Data', 'SQL', 'Cloud', 
    'TypeScript'
  ];

  const nodes = skills.map((skill, i) => {
    const phi = Math.acos(1 - 2 * (i + 0.5) / skills.length);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
    
    const radius = 3;
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return { 
      position: [x, y, z], 
      label: skill 
    };
  });

  return (
    <group>
      {nodes.map((node, idx) => (
        <DataNode 
          key={`node-${idx}`} 
          {...node} 
        />
      ))}
    </group>
  );
};

const CustomEnvironment = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} />
    </>
  );
};

const DataViz3D: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`w-full h-full ${className || ''}`}>
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ 
          antialias: true,
          powerPreference: 'default',
          alpha: true,
        }}
      >
        <color attach="background" args={['#000000']} />
        <CustomEnvironment />
        <DataNetwork />
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.5} 
          enableZoom={false} 
        />
      </Canvas>
    </div>
  );
};

export default DataViz3D;
