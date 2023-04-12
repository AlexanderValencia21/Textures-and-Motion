import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Perf } from "r3f-perf";

import Model from "./Models";
import Airplane from "./AirplaneModel";
import { Text } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";

export default function Experience() {
return (
    <>
    <Perf position="top-left" />

    <MeshReflectorMaterial
        resolution={512}
        blur={[1000, 1000]}
        mixBlur={2}
        mirror={0.5}
        color="red"
    />

    <OrbitControls makeDefault />
    <Float rotation={[0, 0, 0]}>
        <Text
        font="./bangers-v20-latin-regular.woff"
        fontSize={0.5}
        color="blue"
        position-y={2.5}
        maxWidth={8}
        textAlign="center"
        >
        Alexander Valencia.  
        Ing. Sistemas{""}
        </Text>
    </Float>
    <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
    <ambientLight intensity={0.5} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
    </mesh>

    <Model></Model>
    <Airplane></Airplane>
    </>
  );
}
