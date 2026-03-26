import * as THREE from 'three';

const loader = new THREE.TextureLoader(); // turn image into 3D material

const setupTexture = (path) => {
    const texture = loader.load(path);
    texture.colorSpace = THREE.SRGBColorSpace; // vibrant colours 
    texture.magFilter = THREE.NearestFilter; // never blur
    texture.minFilter = THREE.NearestFilter;
    return texture;
};

export const textures = {
    dirt: setupTexture('/dirt.png'),
    grassTop: setupTexture('/grass_top.png'),
    grassSide: setupTexture('/grass_side.png'),
    stone: setupTexture('/stone.png'),
};
