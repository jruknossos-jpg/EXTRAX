import React, { useEffect } from 'react';
import * as THREE from 'three';

const Extractor = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const extractor = new THREE.Mesh(geometry, material);
        scene.add(extractor);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            extractor.rotation.x += 0.01;
            extractor.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return null;
};

export default Extractor;
