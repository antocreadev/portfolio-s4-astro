import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
    const modelRef = useRef();
    const light = useRef();

    useFrame((state) => {
        modelRef.current.rotation.y += 0.001; // Animation de rotation (facultatif)
        light.current.position.x = (state.mouse.x * window.innerWidth) / 2;
        light.current.position.y = (state.mouse.y * window.innerHeight) / 2;
    });

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load('/test.glb', (gltf) => {
            const model = gltf.scene;
            modelRef.current.add(model);
        });
    }, []);

    return (
        <group ref={modelRef}>
            <mesh>
                <boxBufferGeometry args={[1, 1, 1]} />
                <meshLambertMaterial color="#404044" />
            </mesh>
            <pointLight ref={light} position={[10, 10, 10]} intensity={1} />
        </group>
    );
};

const Scene = () => {
    return (
        <Canvas>
            <ambientLight intensity={100} />
            <Model />
        </Canvas>
    );
};

const App = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Scene />
        </div>
    );
};

export default App;
