/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* ================= INNER ================= */

const AntigravityInner = ({
  count = 250,
  magnetRadius = 12,
  ringRadius = 8,
  waveSpeed = 0.5,
  waveAmplitude = 1,
  particleSize = 1.5,
  lerpSpeed = 0.08,
  color = "#ffffff",
  autoAnimate = true,
  particleVariance = 1,
  rotationSpeed = 0.2,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = "capsule",
  fieldStrength = 12,
}) => {
  const meshRef = useRef();
  const { viewport, size } = useThree();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const lastMove = useRef(Date.now());
  const virtualMouse = useRef({ x: 0, y: 0 });

  /* ================= PARTICLES ================= */

  const particles = useMemo(() => {
    const arr = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * viewport.width;
      const y = (Math.random() - 0.5) * viewport.height;
      const z = (Math.random() - 0.5) * 20;

      arr.push({
        t: Math.random() * 100,
        speed: 0.01 + Math.random() * 0.02,

        mx: x,
        my: y,
        mz: z,

        cx: x,
        cy: y,
        cz: z,

        offset: (Math.random() - 0.5) * 2,
      });
    }

    return arr;
  }, [count, viewport.width, viewport.height]);

  /* ================= ANIMATION ================= */

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const { pointer, viewport: v } = state;

    /* Convert pointer to world coords */
    let targetX = (pointer.x * v.width) / 2;
    let targetY = (pointer.y * v.height) / 2;

    /* Auto move */
    if (autoAnimate && Date.now() - lastMove.current > 2000) {
      const t = state.clock.elapsedTime;

      targetX = Math.sin(t * 0.6) * (v.width / 3);
      targetY = Math.cos(t * 0.8) * (v.height / 3);
    } else {
      lastMove.current = Date.now();
    }

    /* Smooth mouse */
    virtualMouse.current.x += (targetX - virtualMouse.current.x) * 0.1;
    virtualMouse.current.y += (targetY - virtualMouse.current.y) * 0.1;

    const mx = virtualMouse.current.x;
    const my = virtualMouse.current.y;

    const globalRot = state.clock.elapsedTime * rotationSpeed;

    /* ================= UPDATE PARTICLES ================= */

    particles.forEach((p, i) => {
      p.t += p.speed;

      const dx = p.mx - mx;
      const dy = p.my - my;

      const dist = Math.sqrt(dx * dx + dy * dy);

      let tx = p.mx;
      let ty = p.my;
      let tz = p.mz * depthFactor;

      if (dist < magnetRadius) {
        const angle = Math.atan2(dy, dx) + globalRot;

        const wave = Math.sin(p.t * waveSpeed) * waveAmplitude;

        const r = ringRadius + wave + p.offset;

        tx = mx + r * Math.cos(angle);
        ty = my + r * Math.sin(angle);

        tz += Math.sin(p.t) * depthFactor;
      }

      /* Lerp */
      p.cx += (tx - p.cx) * lerpSpeed;
      p.cy += (ty - p.cy) * lerpSpeed;
      p.cz += (tz - p.cz) * lerpSpeed;

      dummy.position.set(p.cx, p.cy, p.cz);

      dummy.lookAt(mx, my, p.cz);
      dummy.rotateX(Math.PI / 2);

      /* Pulse */
      const pulse =
        0.9 +
        Math.sin(p.t * pulseSpeed) * 0.25 * particleVariance;

      const scale = pulse * particleSize;

      dummy.scale.set(scale, scale, scale);

      dummy.updateMatrix();

      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  /* ================= RENDER ================= */

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      {particleShape === "capsule" && (
        <capsuleGeometry args={[0.1, 0.4, 4, 8]} />
      )}

      {particleShape === "sphere" && (
        <sphereGeometry args={[0.2, 16, 16]} />
      )}

      {particleShape === "box" && (
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      )}

      {particleShape === "tetrahedron" && (
        <tetrahedronGeometry args={[0.3]} />
      )}

      <meshBasicMaterial color={color} />
    </instancedMesh>
  );
};

/* ================= MAIN ================= */

const Antigravity = (props) => {
  return (
    <Canvas
      dpr={[1, 2]}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
      }}
      camera={{ position: [0, 0, 50], fov: 35 }}
    >
      <AntigravityInner {...props} />
    </Canvas>
  );
};

export default Antigravity;
