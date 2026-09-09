import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";

function buildDisplacedCore() {
  const geometry = new THREE.IcosahedronGeometry(1.7, 24);
  const pos = geometry.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i += 1) {
    v.fromBufferAttribute(pos, i);
    const n =
      Math.sin(v.x * 3.1 + v.y * 1.7) * 0.5 +
      Math.sin(v.y * 2.8 - v.z * 1.9) * 0.5 +
      Math.sin(v.z * 3.4 + v.x * 2.3) * 0.5;
    v.multiplyScalar(1 + n * 0.045);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geometry.computeVertexNormals();
  return geometry;
}

function OrbCore() {
  const geometry = useMemo(buildDisplacedCore, []);
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        color="#141416"
        emissive="#240e04"
        emissiveIntensity={0.32}
        roughness={0.12}
        metalness={0.85}
        clearcoat={1}
        clearcoatRoughness={0.08}
      />
    </mesh>
  );
}

function EmberLattice() {
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.74, 3), []);
  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial color="#E8590C" wireframe transparent opacity={0.2} />
    </mesh>
  );
}

function GyroRings() {
  const chrome = useRef<THREE.Mesh>(null);
  const ember = useRef<THREE.Mesh>(null);
  const chromeGeo = useMemo(() => new THREE.TorusGeometry(2.35, 0.03, 24, 96), []);
  const emberGeo = useMemo(() => new THREE.TorusGeometry(2.62, 0.02, 24, 112), []);

  useEffect(
    () => () => {
      chromeGeo.dispose();
      emberGeo.dispose();
    },
    [chromeGeo, emberGeo],
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (chrome.current) {
      chrome.current.rotation.z = t * 0.22;
      chrome.current.rotation.y = Math.sin(t * 0.1) * 0.5;
    }
    if (ember.current) {
      ember.current.rotation.x = -t * 0.26;
    }
  });

  return (
    <group>
      <mesh ref={chrome} geometry={chromeGeo} rotation-x={Math.PI / 3}>
        <meshStandardMaterial color="#222226" metalness={0.95} roughness={0.15} />
      </mesh>
      <mesh ref={ember} geometry={emberGeo} rotation-y={Math.PI / 2.6} rotation-x={Math.PI / 6}>
        <meshStandardMaterial
          color="#E8590C"
          emissive="#E8590C"
          emissiveIntensity={0.55}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

function DustField() {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 90;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      const r = 2.2 + Math.random() * 1.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame(({ clock }) => {
    if (pointsRef.current) pointsRef.current.rotation.y = clock.getElapsedTime() * 0.04;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        color="#E8590C"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function PointerParallax() {
  const groupRef = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return;
    const damp = 1 - Math.pow(0.001, delta * 4);
    current.current.x += (target.current.x * 0.4 - current.current.x) * damp;
    current.current.y += (target.current.y * 0.3 - current.current.y) * damp;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.12 + current.current.x;
    groupRef.current.rotation.x = Math.sin(t * 0.18) * 0.08 + current.current.y;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0} floatIntensity={0.4}>
        <OrbCore />
        <EmberLattice />
        <GyroRings />
        <DustField />
      </Float>
    </group>
  );
}

export default function HeroScene({ reducedMotion }: { reducedMotion?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      frameloop={reducedMotion ? "demand" : "always"}
      aria-hidden="true"
    >
      <ambientLight color="#0a0a0c" intensity={2.2} />
      <pointLight color="#E8590C" intensity={38} distance={18} position={[3.2, 2.4, 3.2]} />
      <directionalLight color="#404d60" intensity={1.6} position={[-5, -2.5, -2]} />
      <directionalLight color="#ffffff" intensity={0.8} position={[0, 6, 3]} />
      {reducedMotion ? (
        <group rotation={[0.2, 0.4, 0]}>
          <OrbCore />
          <EmberLattice />
          <GyroRings />
        </group>
      ) : (
        <PointerParallax />
      )}
      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
