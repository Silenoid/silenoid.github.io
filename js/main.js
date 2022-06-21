const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

//Renderer instantiation
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Camera and env
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

//Cube
const geometry = new THREE.BoxGeometry();
const meshMat = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, meshMat);
scene.add(cube);

//Line shit
const lineMat = new THREE.LineBasicMaterial({
    color:0x0000ff,
    linewidth: 1
});
const points = [];
points.push(new THREE.Vector3(-1, 0, 0));
points.push(new THREE.Vector3(0, 1, 0));
points.push(new THREE.Vector3(1, 0, 0));
points.push(new THREE.Vector3(-1, 0, 0));
const triangle = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(triangle, lineMat);
scene.add(line);

animate();

var camPosition = camera.position;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x += 0.003;
    cube.rotation.y += 0.005;
    camera.position.z += 0.01;
}
