import {useEffect} from 'react'; // handle side effects and rendering
import * as THREE from 'three'; // import to use 3D objects and scenes

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

    camera.position.z = 5; // move camera along z axis to view the object from behind

    // create a renderer to display the scene 
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight ); // canvas size
    document.body.appendChild( renderer.domElement ); // add to webpage
    

  })

  return <div />;

}

export default App;