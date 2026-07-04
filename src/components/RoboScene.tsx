"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Robot() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Look at cursor logic
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      // Rotate body slightly
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetX * 0.5,
        0.1
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -targetY * 0.2,
        0.1
      );

      // Rotate head more to look at cursor
      if (headRef.current) {
        headRef.current.rotation.y = THREE.MathUtils.lerp(
          headRef.current.rotation.y,
          targetX,
          0.1
        );
        headRef.current.rotation.x = THREE.MathUtils.lerp(
          headRef.current.rotation.x,
          -targetY * 0.8,
          0.1
        );
      }
      
      // Continuous Waving Animation for the right arm
      if (rightArmRef.current) {
        // Waving back and forth around the Z axis
        const waveAngle = Math.sin(state.clock.elapsedTime * 5) * 0.4;
        rightArmRef.current.rotation.z = -2.5 + waveAngle; // Base rotation of -2.5 radians (arm up)
        rightArmRef.current.rotation.x = 0;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      <Float speed={2.5} rotationIntensity={0.1} floatIntensity={0.3}>
        {/* Head Group */}
        <group ref={headRef} position={[0, 2.5, 0]}>
          {/* Main Head Sphere */}
          <mesh>
            <sphereGeometry args={[0.9, 32, 32]} />
            <meshPhysicalMaterial
              color="#ffffff"
              metalness={0.1}
              roughness={0.1}
              clearcoat={1.0}
              clearcoatRoughness={0.1}
              envMapIntensity={1.5}
            />
          </mesh>
          
          {/* Black Visor */}
          <mesh position={[0, 0.1, 0.65]} rotation={[0, 0, Math.PI / 2]}>
            <capsuleGeometry args={[0.3, 0.8, 16, 32]} />
            <meshStandardMaterial color="#111111" roughness={0.1} metalness={0.8} />
          </mesh>
          
          {/* Left Eye (Green Glow) */}
          <mesh position={[-0.25, 0.1, 0.9]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#00FF41"
              emissive="#00FF41"
              emissiveIntensity={2.5}
            />
          </mesh>

          {/* Right Eye (Green Glow) */}
          <mesh position={[0.25, 0.1, 0.9]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#00FF41"
              emissive="#00FF41"
              emissiveIntensity={2.5}
            />
          </mesh>
        </group>

        {/* Neck */}
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry args={[0.2, 0.3, 0.5, 16]} />
          <meshStandardMaterial color="#333333" roughness={0.5} />
        </mesh>

        {/* Torso */}
        <mesh position={[0, 0.6, 0]}>
          <capsuleGeometry args={[0.7, 1.2, 16, 32]} />
          <meshPhysicalMaterial
            color="#ffffff"
            metalness={0.1}
            roughness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Torso Joint/Belt */}
        <mesh position={[0, -0.2, 0]}>
          <sphereGeometry args={[0.65, 32, 32]} />
          <meshStandardMaterial color="#222222" roughness={0.6} />
        </mesh>

        {/* Left Arm (Relaxed) */}
        <group position={[-1, 1, 0]} rotation={[0, 0, 0.3]}>
          {/* Shoulder */}
          <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
          {/* Upper Arm */}
          <mesh position={[0, -0.6, 0]}>
            <capsuleGeometry args={[0.2, 0.8, 16, 16]} />
            <meshPhysicalMaterial color="#ffffff" metalness={0.1} roughness={0.1} clearcoat={1.0} />
          </mesh>
          {/* Hand */}
          <mesh position={[0, -1.3, 0]}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* Right Arm (Waving) */}
        <group position={[1, 1, 0]} ref={rightArmRef}>
          {/* Shoulder */}
          <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
          {/* Upper Arm - Pivot from shoulder */}
          <mesh position={[0, 0.6, 0]}>
            <capsuleGeometry args={[0.2, 0.8, 16, 16]} />
            <meshPhysicalMaterial color="#ffffff" metalness={0.1} roughness={0.1} clearcoat={1.0} />
          </mesh>
          {/* Hand */}
          <mesh position={[0, 1.3, 0]}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* Left Leg */}
        <group position={[-0.4, -0.5, 0]}>
          <mesh position={[0, -0.6, 0]}>
            <capsuleGeometry args={[0.25, 1.0, 16, 16]} />
            <meshPhysicalMaterial color="#ffffff" metalness={0.1} roughness={0.1} clearcoat={1.0} />
          </mesh>
          {/* Foot */}
          <mesh position={[0, -1.3, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
            <capsuleGeometry args={[0.25, 0.4, 16, 16]} />
            <meshPhysicalMaterial color="#ffffff" metalness={0.1} roughness={0.1} clearcoat={1.0} />
          </mesh>
        </group>

        {/* Right Leg */}
        <group position={[0.4, -0.5, 0]}>
          <mesh position={[0, -0.6, 0]}>
            <capsuleGeometry args={[0.25, 1.0, 16, 16]} />
            <meshPhysicalMaterial color="#ffffff" metalness={0.1} roughness={0.1} clearcoat={1.0} />
          </mesh>
          {/* Foot */}
          <mesh position={[0, -1.3, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
            <capsuleGeometry args={[0.25, 0.4, 16, 16]} />
            <meshPhysicalMaterial color="#ffffff" metalness={0.1} roughness={0.1} clearcoat={1.0} />
          </mesh>
        </group>

      </Float>
    </group>
  );
}

export default function RoboScene() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] cursor-none relative z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 1, 8], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={2.5}
          color="#ffffff"
        />
        <pointLight position={[-3, 2, 5]} intensity={1.5} color="#00E5FF" />
        <pointLight position={[3, -2, 5]} intensity={1.5} color="#0047FF" />
        
        <Environment preset="studio" />
        
        <Robot />
        
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.15}
          scale={10}
          blur={2.5}
          far={4}
          color="#0047FF"
        />
      </Canvas>
    </div>
  );
}
