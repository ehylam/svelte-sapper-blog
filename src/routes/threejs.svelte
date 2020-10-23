<script>
    import * as THREE from 'three';
    import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
    import { onMount } from 'svelte';

    let fov = 75;
    let xRotation = 0;
	let yRotation = 0.01;

	let lightZ = 50;
	let lightX = 50;
	let lightY = 50;
	let lightIntensity = 3;

    onMount(() => {
        // Set loader
        const loader = new GLTFLoader();

        // init model variable
        var model;
        loader.load('/renders/building.glb', function(gltf) {

        	// Assign model to imported scene/image
        	model = gltf.scene;
        	scene.add(gltf.scene);

        }, undefined, function(error) {
        	console.error(error);
        })

        // Set scene
        var scene = new THREE.Scene();

        // Set camera
        var camera = new THREE.PerspectiveCamera( fov, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.z = 30;

        // Select canvas
        const canvas = document.querySelector('.hero_scene')
        // Set renderer
        var renderer = new THREE.WebGLRenderer({canvas});
        // renderer.setSize( window.innerWidth, window.innerHeight );



        // Set shapes

        // var geometry = new THREE.BoxGeometry( 30, 30, 30);
        // var material = new THREE.MeshLambertMaterial( { color: 0xfd59d7 } );
        // var cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );



		// Set lighting
		var light = new THREE.PointLight( 0xffffff, 5, 100 );
		light.position.set( 50, 50, 100 );

		light.position.x = lightX
		light.position.y = lightY
		light.position.z = lightZ

		light.intensity = lightIntensity;

		scene.add( light );

		var ambLight = new THREE.AmbientLight( 0x404040, 5 ); // soft white light
		scene.add( ambLight );


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


        // Orbit controls
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
            if (model) model.rotation.y += yRotation;
            if (model) model.rotation.x += xRotation;
            camera.updateProjectionMatrix();

            renderer.render(scene, camera);
        };

        render();
	});



    </script>

    <svelte:head>
        <title>Eric's Thingy</title>
    </svelte:head>




    <section>
        <canvas class="hero_scene">
		</canvas>
		<h4>Click, drag and scroll around the display.</h4>
        <div class="controls">
			<h3>Model Controls</h3>
            <label>X Model rotation
                <input type="range" bind:value={xRotation} min=-0.1 max=0.1 step=0.01>
            </label>
            <label>Y Model Rotation
                <input type="range" bind:value={yRotation} min=-0.1 max=0.1 step=0.01>
			</label>
			<h3>Light Controls</h3>
			<span>Updating the light positions doesn't work</span>
            <label>Z Light Rotation
                <input type="range" bind:value={lightZ} min=-1000 max=1000 step=1 disabled>
			</label>
			<label>X Light Rotation
                <input type="range" bind:value={lightX} min=-1000 max=1000 step=1 disabled>
			</label>
			<label>Y Light Rotation
                <input type="range" bind:value={lightY} min=-1000 max=1000 step=1 disabled>
            </label>
			<label>Light intensity
                <input type="range" bind:value={lightIntensity} min=0 max=100 step=1 disabled>
            </label>

        </div>
    </section>


    <style type="text/scss">
        section {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .hero_scene {
                width: 100%;
                max-height: 100vw;
                max-width: 1024px;
            }

			h4 {
				margin-top: 10px;
				margin-bottom: 0;
			}

            .controls {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

				h3 {
					margin: 30px 0px 10px 0;
				}


            }
        }

    </style>
