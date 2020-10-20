<script>
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { onMount } from 'svelte';

onMount(() => {
	// Set loader
	const loader = new GLTFLoader();

	// init model variable
	// var model;
	// loader.load('/renders/cookoe.glb', function(gltf) {

	// 	// Assign model to imported scene/image
	// 	model = gltf.scene;
	// 	scene.add(gltf.scene);

	// }, undefined, function(error) {
	// 	console.error(error);
	// })
	// Set scene
	var scene = new THREE.Scene();

	// Set camera
	var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );
	camera.position.z = 100;

	// Select canvas
	const canvas = document.querySelector('.hero_scene')
	// Set renderer
	var renderer = new THREE.WebGLRenderer({canvas});
	// renderer.setSize( window.innerWidth, window.innerHeight );



	// Set shapes
	var geometry = new THREE.BoxGeometry( 20, 20, 20);
	var material = new THREE.MeshLambertMaterial( { color: 0xfd59d7 } );
	var cube = new THREE.Mesh( geometry, material );
	scene.add( cube );



	// Set lighting
	var light = new THREE.PointLight( 0xFFFF00 );
	light.position.set( 10, 0, 25 );
	scene.add( light );

	light.position.z = 90;


	// Set ambient light
	var ambientLight = new THREE.AmbientLight( 0x404040, 4 ); // soft white light
	scene.add( ambientLight );

	ambientLight.position.z = 80;


	// Resize renderer to match screen

	function resizeRenderer(renderer) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if(needResize) {
			renderer.setSize(width,height,false);
		}

		return needResize;
	}


	// Orbit controls?
	var controls = new OrbitControls(camera, renderer.domElement);


	// Execute render
	var render = function (time) {
		time *=0.01;

		if(resizeRenderer(renderer)) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		const canvas = renderer.domElement;
		camera.aspect = canvas.clientWidth / canvas.clientHeight;
		camera.updateProjectionMatrix();

		requestAnimationFrame( render );

		// set model z pos

		// if(model) model.position.z = 80;
		// Rotate model
		// if (model) model.rotation.x += 0.01;
		camera.updateProjectionMatrix();

		renderer.render(scene, camera);
	};

	render();
});
</script>

<style type="text/scss">

	section {
		width: 100%;
		.hero_scene {
			width: 100%;
			height: 100vh;
		}
	}

</style>

<svelte:head>
	<title>Eric's Thingy</title>
</svelte:head>




<section>
	<canvas class="hero_scene">

	</canvas>
</section>