import { useAnimations, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Airplane() {
const airplane = useLoader(GLTFLoader, "/static/F-16D.gltf");
return <primitive object={airplane.scene} scale={0.3} position={[2, 0, 2.5]} />;
}