var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

drawScene();
render();

function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

function drawScene() {
	var triangleGeometry = new THREE.Geometry();
	triangleGeometry.vertices.push(new THREE.Vector3(0, 1, 0));
	triangleGeometry.vertices.push(new THREE.Vector3(-1, -1, 0));
	triangleGeometry.vertices.push(new THREE.Vector3(1, -1, 0));
	triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));
	
	var triangleMat = new THREE.MeshBasicMaterial();
	
	var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMat);
	triangleMesh.position.set(-1.5, 0, -6);

	scene.add(triangleMesh);
	
	var squareGeometry = new THREE.Geometry();
	squareGeometry.vertices.push(new THREE.Vector3(-1, 1, 0));
	squareGeometry.vertices.push(new THREE.Vector3(-1, -1, 0));
	squareGeometry.vertices.push(new THREE.Vector3(1, -1, 0));
	squareGeometry.vertices.push(new THREE.Vector3(1, 1, 0));
	squareGeometry.faces.push(new THREE.Face3(0, 1, 2));
	squareGeometry.faces.push(new THREE.Face3(0, 2, 3));
	
	var squareMat = new THREE.MeshBasicMaterial();
	
	var squareMesh = new THREE.Mesh(squareGeometry, squareMat);
	squareMesh.position.set(1.5, 0, -6);
	
	scene.add(squareMesh);
	
}