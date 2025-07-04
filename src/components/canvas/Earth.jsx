import { Suspense, useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Points,
  PointMaterial,
  Preload
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Stars Background (Simple & Fast)
const Stars = () => {
  const ref = useRef();
  const points = useMemo(() => random.inSphere(new Float32Array(1000), { radius: 2 }), []);
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0005;
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#FFFFFF"
          size={0.01}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Earth Model (optional, heavier)
const Earth = () => {
  const { scene } = useGLTF("/planet/scene.glb");
  const earth = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    return () =>
      earth.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          Array.isArray(child.material)
            ? child.material.forEach((mat) => mat.dispose())
            : child.material.dispose();
        }
      });
  }, [earth]);

  return <primitive object={earth} scale={0.6} position={[0, -0.3, 0]} />;
};

// Main Canvas Component
const SceneCanvas = () => {
  const [webglError, setWebglError] = useState(false);
  const showEarth = true; // 👈 Set to false if you want only stars for performance

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {!webglError ? (
        <Canvas
          camera={{ position: [0, 0, 3], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
          onCreated={({ gl }) => {
            const canvas = gl.domElement;
            canvas.addEventListener("webglcontextlost", (e) => {
              e.preventDefault();
              setWebglError(true);
            });
            canvas.addEventListener("webglcontextrestored", () => {
              setWebglError(false);
            });
          }}
        >
          <Suspense fallback={null}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Stars />
            {showEarth && <Earth />}
            <Preload all />
          </Suspense>
        </Canvas>
      ) : (
        <div className="w-full h-screen flex items-center justify-center text-white bg-black">
          ❌ WebGL Error — Please refresh
        </div>
      )}
    </div>
  );
};

export default SceneCanvas;
