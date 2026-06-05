import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useMemo, useRef } from "react";

// const snippets = [
//   "const app = () => {}",
//   "<Hero />",
//   "useState()",
//   "npm run dev",
//   "async await",
//   "display: flex;",
//   "grid-template",
//   "React.memo",
//   "API / JSON",
//   "MG Solutions",
// ];
const symbols = [
  "</>",
  "{ }",
  "[ ]",
  "01",
  "10",
  "AI",
  "API",
  "UI",
  "UX",
  "DB",
  "λ",
  "⚡",
  "◆",
  "●",
  "▣",
  "▰",
  "⌘",
  "∞",
  "↯",
  "◌",
];

function CodeRain() {
  const groupRef = useRef();

const colors = ["#4DA3FF", "#7B5CFF", "#FF4FD8", "#ffffff"];

const items = useMemo(() => {
  return Array.from({ length: 80 }, (_, i) => ({
    id: i,
    text: symbols[Math.floor(Math.random() * symbols.length)],
    x: (Math.random() - 0.5) * 14,
    y: (Math.random() - 0.5) * 10,
    z: -Math.random() * 10,
    speed: 0.003 + Math.random() * 0.009,
    size: 0.12 + Math.random() * 0.25,
    opacity: 0.18 + Math.random() * 0.35,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
}, []);
  useFrame(() => {
    groupRef.current.children.forEach((child, i) => {
      child.position.y -= items[i].speed;

      if (child.position.y < -5.5) {
        child.position.y = 5.5;
      }
    });

    groupRef.current.rotation.y += 0.0008;
  });

  return (
    <group ref={groupRef}>
      {items.map((item) => (
       <Text
  key={item.id}
  position={[item.x, item.y, item.z]}
  fontSize={item.size}
  color={item.color}
  anchorX="center"
  anchorY="middle"
  fillOpacity={item.opacity}
>
  {item.text}
</Text>
      ))}
    </group>
  );
}

export default function CodeRainBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
        <ambientLight intensity={1} />
        <CodeRain />
      </Canvas>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,7,20,.45)_45%,rgba(4,7,20,.95)_100%)]" />
    </div>
  );
}