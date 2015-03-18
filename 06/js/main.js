var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var cubeMesh;

drawScene();
render();

function render() {
	requestAnimationFrame(render);

	cubeMesh.rotation.x += 0.01;
	cubeMesh.rotation.y += 0.03;

	renderer.render(scene, camera);
}

function drawScene() {
	var neheTexture = THREE.ImageUtils.loadTexture("img/NeHe.png");

	var cubeGeometry = new THREE.BoxGeometry(2, 2, 2);

	var cubeMaterial = new THREE.MeshBasicMaterial({
		map:neheTexture,
		side:THREE.DoubleSide
	});

	cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cubeMesh.position.set(0, 0, -6);

	scene.add(cubeMesh);
}
