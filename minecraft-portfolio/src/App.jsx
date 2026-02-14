import {useEffect} from 'react'; // handle side effects and rendering
import * as THREE from 'three'; // import to use 3D objects and scenes
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // ability to move mouse=surroundings

function App(){ // container for entire site
  useEffect(()=>{
    // create scene with objects
    const scene = new THREE.Scene(); 
    // create camera -> viewpoint
    const camera = new THREE.PerspectiveCamera( // acts like eyes, need this in order to see the scene
      75, // field of view
      window.innerWidth / window.innerHeight, // aspect ratio
      0.1, // regulate object size
      1000
    );

    camera.position.z = 20; // move camera along z axis to view the object from behind
    camera.position.y = 10;
    camera.lookAt(0,0,0); // center of the scene 

    // create a renderer to display the scene 
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight ); // canvas size
    document.body.appendChild( renderer.domElement ); // add to webpage
    
    const textureLoader = new THREE.TextureLoader();
    const grassTexture = textureLoader.load('/pack.png'); // add the grass texturing

    grassTexture.wrapS = THREE.RepeatWrapping; 
    grassTexture.wrapT = THREE.RepeatWrapping; 
    grassTexture.repeat.set(150, 150);

    // create plane of grass
    const planeGeometry = new THREE.PlaneGeometry(1000, 1000); 
    const planeMaterial = new THREE.MeshBasicMaterial({ map: grassTexture });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial); 

    scene.background = new THREE.Color(0x87CEEB);

    // rotate the plane to lie flat
    plane.rotation.x = -Math.PI / 2; 
    scene.add(plane); 

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.dampingFactor = 0.05; 
    controls.target.set(0, 0, 0); 

    // render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
   
    

  
  }, []);
  return <div />;
}

export default App;