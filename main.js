import './style.css'
import * as THREE from 'three'

//1.scene (container holds objects, camera and lights) 
//2.camera (helps to look inside a scene) common-persepctive camera
//  a. First arg is field of view based on full 360
//  b. Aspect ratio based users browser window, calc windows inner width by inner height
//  c. View frustrum to control which objects are visible relative to camera itself
//3.renderer- render the graphics to the scene
//  a. Search dom element to use canvas with id of background
//  b.pixel ratio
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL3DRender({
  canvas: document.querySelector('#bg'),
})
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

