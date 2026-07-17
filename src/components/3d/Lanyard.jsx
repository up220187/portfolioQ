import { useRef, useState, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Physics, RigidBody, useSphericalJoint } from '@react-three/rapier';
import { Environment, RoundedBox, Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const ANCHOR = [0, 5, 0];
const CARD_W = 4;
const CARD_H = 6;
const CARD_D = 0.1;
const STRING_COLOR = '#e63975';
const PHOTO_RADIUS = 1;

function LanyardString({ anchorRef, cardRef }) {
  const meshRef = useRef();
  const curve = useRef(
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(...ANCHOR),
      new THREE.Vector3(0, 3, 0),
      new THREE.Vector3(0, 1, 0),
    ])
  );

  useFrame(() => {
    if (!meshRef.current || !anchorRef.current || !cardRef.current) return;

    const a = anchorRef.current.translation();
    const c = cardRef.current.translation();
    const topY = c.y + CARD_H / 2;

    curve.current.points[0].set(a.x, a.y, a.z);
    curve.current.points[1].set(
      (a.x + c.x) * 0.5,
      (a.y + topY) * 0.5 - 0.6,
      (a.z + c.z) * 0.5
    );
    curve.current.points[2].set(c.x, topY, c.z);

    const geo = new THREE.TubeGeometry(curve.current, 40, 0.03, 8, false);
    meshRef.current.geometry.dispose();
    meshRef.current.geometry = geo;
  });

  return (
    <mesh ref={meshRef}>
      <tubeGeometry
        args={[
          new THREE.CatmullRomCurve3([
            new THREE.Vector3(...ANCHOR),
            new THREE.Vector3(0, 3, 0),
            new THREE.Vector3(0, 1, 0),
          ]),
          40,
          0.03,
          8,
          false,
        ]}
      />
      <meshStandardMaterial color={STRING_COLOR} roughness={0.5} />
    </mesh>
  );
}

function BadgeCard({ cardRef }) {
  const profileTexture = useTexture('/profile.jpg');
  const [hovered, setHovered] = useState(false);
  const dragging = useRef(false);

  const { camera, size } = useThree();
  const dragPlane = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));
  const raycaster = useRef(new THREE.Raycaster());
  const dragOffset = useRef(new THREE.Vector3());

  const getWorldPosition = useCallback(
    (clientX, clientY) => {
      const mouse = new THREE.Vector2(
        (clientX / size.width) * 2 - 1,
        -(clientY / size.height) * 2 + 1
      );
      raycaster.current.setFromCamera(mouse, camera);
      const target = new THREE.Vector3();
      raycaster.current.ray.intersectPlane(dragPlane.current, target);
      return target;
    },
    [camera, size]
  );

  const handlePointerDown = useCallback(
    (e) => {
      e.stopPropagation();
      e.target.setPointerCapture(e.pointerId);

      const body = cardRef.current;
      if (!body) return;

      body.wakeUp();
      body.setBodyType(1); // kinematic

      const worldPos = getWorldPosition(e.clientX, e.clientY);
      const cardPos = body.translation();
      dragOffset.current.set(
        cardPos.x - worldPos.x,
        cardPos.y - worldPos.y,
        0
      );

      dragging.current = true;
    },
    [cardRef, getWorldPosition]
  );

  const handlePointerMove = useCallback(
    (e) => {
      if (!dragging.current || !cardRef.current) return;

      const worldPos = getWorldPosition(e.clientX, e.clientY);
      const target = worldPos.add(dragOffset.current);

      cardRef.current.setNextKinematicTranslation(
        new THREE.Vector3(target.x, target.y, 0)
      );
    },
    [cardRef, getWorldPosition]
  );

  const handlePointerUp = useCallback(
    (e) => {
      if (!dragging.current || !cardRef.current) return;

      e.target.releasePointerCapture(e.pointerId);

      const body = cardRef.current;
      body.setBodyType(0); // dynamic

      body.applyImpulse(new THREE.Vector3(3, 1, 0), true);

      dragging.current = false;
    },
    [cardRef]
  );

  const photoY = 1.2;
  const nameY = -1.2;
  const roleY = -1.8;
  const lineY = -2.2;

  return (
    <group
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => {
        setHovered(false);
        if (dragging.current && cardRef.current) {
          cardRef.current.setBodyType(0);
          cardRef.current.applyImpulse(new THREE.Vector3(2, 0.5, 0), true);
          dragging.current = false;
        }
      }}
    >
      {/* Glassmorphism Card */}
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
          color={hovered ? '#fff5f8' : '#ffffff'}
        />
      </RoundedBox>

      {/* Lanyard Ring */}
      <mesh position={[0, CARD_H / 2 - 0.22, 0]}>
        <torusGeometry args={[0.18, 0.05, 12, 24]} />
        <meshStandardMaterial color="#aaa" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Profile Photo — strict 1:1 */}
      <group position={[0, photoY, CARD_D / 2 + 0.003]}>
        <mesh>
          <circleGeometry args={[PHOTO_RADIUS + 0.08, 48]} />
          <meshStandardMaterial color={STRING_COLOR} />
        </mesh>
        <mesh>
          <circleGeometry args={[PHOTO_RADIUS, 48]} />
          <meshBasicMaterial map={profileTexture} toneMapped={false} />
        </mesh>
      </group>

      {/* Name */}
      <Text
        position={[0, nameY, CARD_D / 2 + 0.003]}
        fontSize={0.38}
        fontWeight="bold"
        color="#3d1426"
        anchorX="center"
        anchorY="middle"
        maxWidth={CARD_W - 0.6}
        textAlign="center"
      >
        Reyna Martínez
      </Text>

      {/* Role */}
      <Text
        position={[0, roleY, CARD_D / 2 + 0.003]}
        fontSize={0.22}
        color="#505050"
        anchorX="center"
        anchorY="middle"
        maxWidth={CARD_W - 0.6}
        textAlign="center"
      >
        Frontend Developer &amp; UI/UX
      </Text>

      {/* Accent Line */}
      <mesh position={[0, lineY, CARD_D / 2 + 0.003]}>
        <planeGeometry args={[CARD_W - 1, 0.03]} />
        <meshStandardMaterial color={STRING_COLOR} />
      </mesh>
    </group>
  );
}

function LanyardScene() {
  const anchorRef = useRef();
  const cardRef = useRef();

  useSphericalJoint(anchorRef, cardRef, [
    [0, 0, 0],
    [0, CARD_H / 2, 0],
  ]);

  return (
    <>
      <RigidBody type="fixed" ref={anchorRef} position={ANCHOR}>
        <mesh>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
        </mesh>
      </RigidBody>

      <LanyardString anchorRef={anchorRef} cardRef={cardRef} />

      <RigidBody
        type="dynamic"
        ref={cardRef}
        position={[0, 0.5, 0]}
        linearDamping={0.4}
        angularDamping={0.6}
        colliders={false}
      >
        <BadgeCard cardRef={cardRef} />
      </RigidBody>
    </>
  );
}

export default function Lanyard() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Environment preset="city" />

      <Physics gravity={[0, -9.81, 0]}>
        <LanyardScene />
      </Physics>
    </>
  );
}
