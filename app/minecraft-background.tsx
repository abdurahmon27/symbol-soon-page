"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import type * as THREE from "three"

function MinecraftBlock({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.2

      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.1
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2 + delay) * 0.05
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={Math.random() > 0.7 ? "#000000" : "#ffffff"} roughness={0.8} metalness={0.1} />
    </mesh>
  )
}

function BlockGrid() {
  const blocks = useMemo(() => {
    const blockArray = []
    const gridSize = 12
    const spacing = 2.5

    for (let x = -gridSize; x <= gridSize; x += spacing) {
      for (let z = -gridSize; z <= gridSize; z += spacing) {
        const y = Math.sin(x * 0.3) * Math.cos(z * 0.3) * 2 - 5

        if (Math.random() > 0.3) {
          blockArray.push({
            position: [x, y, z] as [number, number, number],
            delay: (x + z) * 0.1,
          })
        }
      }
    }

    return blockArray
  }, [])

  return (
    <>
      {blocks.map((block, index) => (
        <MinecraftBlock key={index} position={block.position} delay={block.delay} />
      ))}
    </>
  )
}

function FloatingBlocks() {
  const blocks = useMemo(() => {
    const floatingBlocks = []
    for (let i = 0; i < 15; i++) {
      floatingBlocks.push({
        position: [(Math.random() - 0.5) * 40, Math.random() * 10 - 2, (Math.random() - 0.5) * 40] as [
          number,
          number,
          number,
        ],
        delay: Math.random() * Math.PI * 2,
      })
    }
    return floatingBlocks
  }, [])

  return (
    <>
      {blocks.map((block, index) => (
        <MinecraftBlock key={`floating-${index}`} position={block.position} delay={block.delay} />
      ))}
    </>
  )
}

function CameraController() {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2
    state.camera.position.y = 2 + Math.cos(state.clock.elapsedTime * 0.15) * 1
    state.camera.lookAt(0, -2, 0)
  })

  return null
}

export function MinecraftBackground() {
  return (
    <Canvas
      camera={{
        position: [0, 2, 8],
        fov: 60,
        near: 0.1,
        far: 100,
      }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.6}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />

      <BlockGrid />
      <FloatingBlocks />

      <CameraController />
    </Canvas>
  )
}
