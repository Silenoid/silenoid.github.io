const colors = {
    dark: 0x2D2D2A,
    accent: 0xD82AD8,
    secondary: 0x28C9E2
}

const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

// Adjust resolution on windows resize
window.addEventListener( 'resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}, false );

// Renderer instantiation
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(colors.dark);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Camera and env
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

// Cube
const geometry = new THREE.BoxGeometry();
const meshMat = new THREE.MeshBasicMaterial({color: colors.secondary});
const cube = new THREE.Mesh(geometry, meshMat);
scene.add(cube);

// Line stuff
const lineMat = new THREE.LineBasicMaterial({
    color: colors.accent,
});
const points = [];
points.push(new THREE.Vector3(-1, 0, 0));
points.push(new THREE.Vector3(0, 1, 0));
points.push(new THREE.Vector3(1, 0, 0));
points.push(new THREE.Vector3(-1, 0, 0));
const triangle = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(triangle, lineMat);
scene.add(line);

var clock = new THREE.Clock()

// Game loop callback
animate();
function animate() {
    var elapsedTime = clock.getElapsedTime();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    
    cube.rotation.x = Math.sin(elapsedTime * 0.3);
    cube.rotation.y = Math.cos(elapsedTime * 0.5);
    cube.rotation.z = Math.sin(elapsedTime * 0.7);
    camera.position.z = 10 + 3 * Math.sin(elapsedTime + 178);
}
