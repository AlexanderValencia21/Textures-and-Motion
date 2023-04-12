import { useAnimations, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model() {
const modelfox = useLoader(GLTFLoader, "/static/Fox.glb");
const animationFox = useAnimations(modelfox.animations, modelfox.scene);

useEffect(() => {
    const action = animationFox.actions.Run;
    console.log(animationFox.actions);
    action.play();
});
return (
    <primitive object={modelfox.scene} scale={0.02} position={[-2.5, 0, 2.5]} />
);
}
