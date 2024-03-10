import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
let root
let root2
let root3
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const material = new THREE.MeshBasicMaterial( { color: 0x4287f5 } );
const cube = new THREE.Mesh( geometry, material );

const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
const material2 = new THREE.MeshBasicMaterial( { color: 0x048c0b } );
const cube2 = new THREE.Mesh( geometry2, material2 );

const geometry21 = new THREE.BoxGeometry( 2, 1, 2 );
const material21 = new THREE.MeshBasicMaterial( { color: 0xc40c0c } );
const cube21 = new THREE.Mesh( geometry21, material21 );

const geometry22 = new THREE.BoxGeometry( 1, 2, 1 );
const material22 = new THREE.MeshBasicMaterial( { color: 0xc40c0c } );
const cube22 = new THREE.Mesh( geometry22, material22 );

scene.add( cube );
scene.add( cube2 );
scene.add( cube21 );
scene.add( cube22 );

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2, 2, 5)
scene.add( light )

const loader = new GLTFLoader();

loader.load( './public/pon4ik2.glb', function ( gltf ) {
    //texture.gltf = THREE.SRGBColorSpace;
    root = gltf.scene
    root.scale.set(1,1,1)
    root.position.x=3
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

loader.load( './public/monkey.glb', function ( gltf ) {
    //texture.gltf = THREE.SRGBColorSpace;
    root2 = gltf.scene
    root2.scale.set(1,1,1)
    root2.position.x=-3
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


loader.load( './public/tank.glb', function ( gltf ) {
    //texture.gltf = THREE.SRGBColorSpace;
    root3 = gltf.scene
    root3.scale.set(0.2,0.2,0.2)
    //aboba.rotation.x = 5
    //root2 = gltf.scene
    //root2.scale.set(1,1,1)
    //root2.position.x=-3
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
//#4287f5
//0x00ff00
camera.position.z = 5;
cube.position.x=0
//root.position.x = 5
//root2.position.x=-5
function click() {
    root3.position.x+=1
    if (root3.position.x>=13) {
        root3.position.x=-13
    }
}

const button = document.querySelector('button');
button.addEventListener('click', click);

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.01;
    cube.position.x +=0.1
    if (cube.position.x>=13) {
        cube.position.x=-13
    }

    cube2.rotation.x += 0.03;
    cube2.rotation.y += 0.01;
    cube2.position.y +=0.1
    if (cube2.position.y>=10) {
        cube2.position.y=-10
    }

    cube21.rotation.x += 0.09;
    cube21.rotation.y += 0.09;
    cube21.position.y +=0.1
    cube21.position.x -=0.1
    if (cube21.position.x<=-13) {
        cube21.position.x=13
    }
    if (cube21.position.y>=10) {
        cube21.position.y=-10
    }

    cube22.rotation.x += 0.01;
    cube22.rotation.y += 0.01;
    cube22.position.y +=0.5
    cube22.position.x +=0.5
    if (cube22.position.x>=13) {
        cube22.position.x=-13
    }
    if (cube22.position.y>=10) {
        cube22.position.y=-10
    }
    root.rotation.y+=0.1
    root.rotation.x+=0.01
    root2.rotation.y+=0.02

    root3.rotation.y+=0.02
	renderer.render( scene, camera );
}
animate();