import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const CARD_W = 4.8;
const CARD_H = 7.2;
const CARD_D = 0.1;
const STRING_COLOR = '#e63975';
const PHOTO_RADIUS = 2;

export default function Lanyard() {
  const groupRef = useRef();
  const profileTexture = useTexture('/profile.jpg');

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = Math.sin(t * 1.2) * 0.15;
    groupRef.current.rotation.z = Math.sin(t * 0.8) * 0.03;
  });

  const photoY = 1.6;
  const nameY = -1.6;
  const roleY = -2.4;
  const lineY = -2.9;

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />

      <group ref={groupRef}>
        <RoundedBox args={[CARD_W, CARD_H, CARD_D]} radius={0.22} smoothness={4}>
          <meshPhysicalMaterial
            transmission={0.95}
            roughness={0.1}
            thickness={1.5}
            envMapIntensity={2.5}
            ior={1.5}
            opacity={1}
            transparent
            clearcoat={1.0}
            clearcoatRoughness={0.05}
            color="#ffffff"
          />
        </RoundedBox>

        <mesh position={[0, CARD_H / 2 - 0.22, 0]}>
          <torusGeometry args={[0.18, 0.05, 12, 24]} />
          <meshStandardMaterial color="#aaa" metalness={0.9} roughness={0.15} />
        </mesh>

        <group position={[0, photoY, CARD_D / 2 + 0.003]}>
          <mesh>
            <circleGeometry args={[PHOTO_RADIUS + 0.12, 48]} />
            <meshStandardMaterial color={STRING_COLOR} />
          </mesh>
          <mesh>
            <circleGeometry args={[PHOTO_RADIUS, 48]} />
            <meshBasicMaterial map={profileTexture} toneMapped={false} />
          </mesh>
        </group>

        <Text
          position={[0, nameY, CARD_D / 2 + 0.003]}
          fontSize={0.42}
          fontWeight="bold"
          color="#3d1426"
          anchorX="center"
          anchorY="middle"
          maxWidth={CARD_W - 0.8}
          textAlign="center"
        >
          Reyna Martínez
        </Text>

        <Text
          position={[0, roleY, CARD_D / 2 + 0.003]}
          fontSize={0.26}
          color="#505050"
          anchorX="center"
          anchorY="middle"
          maxWidth={CARD_W - 0.8}
          textAlign="center"
        >
          Frontend Developer &amp; UI/UX
        </Text>

        <mesh position={[0, lineY, CARD_D / 2 + 0.003]}>
          <planeGeometry args={[CARD_W - 1.2, 0.03]} />
          <meshStandardMaterial color={STRING_COLOR} />
        </mesh>
      </group>
    </>
  );
}
