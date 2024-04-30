// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
let scene, camera, renderer;

function init(){
	scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff, 3);
	light.position.set(1,1,5);
	scene.add(light);

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	
	
	// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
	const controls = new OrbitControls(camera, renderer.domElement);

	const loader = new GLTFLoader(); // to load 3d models

	loader.load('woman/scene.gltf', function (gltf){
		const woman = gltf.scene;
		scene.add(woman);
		woman.scale.set(3.5, 3.5, 3.5);
		woman.position.set(0, -2.7, 0);

	})
	
	
	// →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
	
	// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
	// // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	// const texture = new THREE.TextureLoader().load('textures/Ice002_1K-JPG_Color.jpg');
	// const material = new THREE.MeshBasicMaterial( { map: texture } );
	// cube = new THREE.Mesh( geometry, material );
	// scene.add( cube );
	
	camera.position.z = 5;
}

function animate() {
	requestAnimationFrame( animate );

	// brain.rotation.x += 0.01;
	// brain.rotation.y += 0.01;

	renderer.render( scene, camera );
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();