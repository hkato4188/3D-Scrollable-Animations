import "./style.css";
import * as THREE from "three";

/*
1.scene (container holds objects, camera and lights) 
2.camera (helps to look inside a scene) common-persepctive camera
  a. First arg is field of view based on full 360
  b. Aspect ratio based users browser window, calc windows inner width by inner height
  c. View frustrum to control which objects are visible relative to camera itself
3.renderer- render the graphics to the scene
  a. Search dom element to use canvas with id of background
  b.pixel ratio
*/
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
  color: 0xbed7dc,
  wireframe: true,
});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
//rerender screen to see it with recursive function with an infinite loop so you do not have to call the render method repeatedly
// renderer.render(scene, camera)
function animate() {
  requestAnimationFrame(animate);
  //every time screen is repainted with an animation frame we update x,y,z access to rotate
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}
animate();
