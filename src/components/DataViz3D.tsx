
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const SkillNode: React.FC<{
  position: [number, number, number];
  skill: string;
  index: number;
}> = ({ position, skill, index }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Color palette with soft, professional colors
  const colors = [
    '#8B5CF6',  // Soft Purple
    '#1EAEDB', // Ocean Blue
    '#D946EF', // Magenta Pink
    '#F97316', // Bright Orange
  ];

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      const scale = 1 + (hovered ? 0.2 * Math.sin(t * 5) : 0);
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
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial 
          color={colors[index % colors.length]} 
          opacity={hovered ? 0.8 : 0.6}
          transparent
          roughness={0.5}
          metalness={0.3}
        />
      </mesh>
      {hovered && (
        <Text
          position={[0, 0.3, 0]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="bottom"
        >
          {skill}
        </Text>
      )}
    </group>
  );
};

const SkillNetwork: React.FC = () => {
  const skills = [
    'Python', 'React', 'AWS', 
    'Data Science', 'SQL', 'Cloud', 
    'TypeScript', 'Machine Learning'
  ];

  const nodes = skills.map((skill, i) => {
    const phi = Math.acos(1 - 2 * (i + 0.5) / skills.length);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
    
    const radius = 3;
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return { 
      position: [x, y, z] as [number, number, number], 
      skill,
      index: i
    };
  });

  return (
    <group>
      {nodes.map((node) => (
        <SkillNode 
          key={node.skill} 
          position={node.position} 
          skill={node.skill}
          index={node.index}
        />
      ))}
    </group>
  );
};

const CustomEnvironment = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
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
        <SkillNetwork />
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.5} 
          enableZoom={true} 
          maxZoom={10}
          minZoom={3}
        />
      </Canvas>
    </div>
  );
};

export default DataViz3D;
