var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var pyramidMesh;
var cubeMesh;

drawScene();
render();

function render() {
	requestAnimationFrame(render);

	pyramidMesh.rotation.y -= 0.05;
	cubeMesh.rotation.x += 0.1;

	renderer.render(scene, camera);
}

function drawScene() {
	var pyramidGeometry = new THREE.CylinderGeometry(0, 1.54, 2, 4, 1);

	var pyramidMaterial = new THREE.MeshBasicMaterial({
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide
	});

	var vertexColors = new Array();
	for(var iVertex = 0; iVertex < pyramidGeometry.vertices.length; iVertex++) {
		var vertex = pyramidGeometry.vertices[iVertex];
		vertexColors[iVertex] = colorVertex(vertex);
		console.log(vertex);
		console.log(vertexColors[iVertex]);
	}

	for(var iFace = 0; iFace < pyramidGeometry.faces.length; iFace++) {
		var face = pyramidGeometry.faces[iFace];
		
		// face.a is the index of the vertex in the vertex array
		face.vertexColors[0] = vertexColors[face.a];
		face.vertexColors[1] = vertexColors[face.b];
		face.vertexColors[2] = vertexColors[face.c];
	}

	pyramidMesh = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
	pyramidMesh.position.set(-1.5, 0, -6);

	scene.add(pyramidMesh);
	
	var cubeGeometry = new THREE.CubeGeometry(2, 2, 2);
	
	var cubeMaterial = new THREE.MeshBasicMaterial({
		vertexColors:THREE.FaceColors,
		side:THREE.DoubleSide
	});
	
	// set face colors
	cubeGeometry.faces[0].color = new THREE.Color(0xFF0000);
	cubeGeometry.faces[1].color = new THREE.Color(0xFFFF00);
	cubeGeometry.faces[2].color = new THREE.Color(0xFF00FF);
	cubeGeometry.faces[3].color = new THREE.Color(0x00FF00);
	cubeGeometry.faces[4].color = new THREE.Color(0x00FFFF);
	cubeGeometry.faces[5].color = new THREE.Color(0x0000FF);

	cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cubeMesh.position.set(1.5, 0, -6);
	
	scene.add(cubeMesh);
	
}

function colorVertex(vertex) {
	var epsilon = 0.001;
	if(vertex.y > 0) {
		return new THREE.Color(0xFF0000);
	} else if(Math.abs(vertex.z) < epsilon) {
		return new THREE.Color(0x00FF00);
	}
	return new THREE.Color(0x0000FF);
}