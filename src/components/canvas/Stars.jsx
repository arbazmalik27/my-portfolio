import { useRef, useMemo, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();

  // Use fewer stars to prevent overload
  const count = 1500;
  const positions = useMemo(
    () => random.inSphere(new Float32Array(count * 3), { radius: 1.2 }),
    []
  );

  const velocities = useMemo(() => {
    const v = new Float32Array(count * 3);
    for (let i = 0; i < v.length; i++) {
      v[i] = (Math.random() - 0.5) * 0.0005; // Very subtle movement
    }
    return v;
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    for (let i = 0; i < positions.length; i++) {
      positions[i] += velocities[i];
      if (positions[i] > 1.2 || positions[i] < -1.2) velocities[i] *= -1;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} frustumCulled>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.01}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleContextLost = (e) => {
      e.preventDefault();
      console.warn("WebGL context lost. Refreshing page recommended.");
      alert("⚠️ WebGL context lost. Please refresh the page.");
    };

    const canvas = canvasRef.current?.querySelector("canvas");
    canvas?.addEventListener("webglcontextlost", handleContextLost, false);

    return () => {
      canvas?.removeEventListener("webglcontextlost", handleContextLost);
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        frameloop="always"
        dpr={[1, 1.5]}
        gl={{ preserveDrawingBuffer: false, antialias: true }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
