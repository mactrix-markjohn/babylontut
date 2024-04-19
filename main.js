import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function() {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);
  
  // const box = new BABYLON.MeshBuilder.CreateBox('myBox', {
  //   size: 0.1,
  //   width: 2,
  //   height: 0.05,
  //   depth: 0.5,
  //   faceColors: [
  //     new BABYLON.Color4(1,0,0,1),
  //     BABYLON.Color3.Green()
  //   ]
  // });

  // const sphere = new BABYLON.MeshBuilder.CreateSphere('mySphere',{
  //   segments: 50,
  //   diameter: 0.3,
  //   diameterY: 0.4
  // },scene);

  // const ground = new BABYLON.MeshBuilder.CreateGround('',{
  //   height: 10,
  //   width: 10,
  //   subdivisions: 5,
  //   subdivisionsX: 10
  // });

  // ground.material = new BABYLON.StandardMaterial();
  // ground.material.wireframe = true;

  const groundFromHM = new BABYLON.MeshBuilder.CreateGroundFromHeightMap('','/heightmap.png',{
    height: 10,
    width: 10,
    subdivisions: 50,
    maxHeight: 1.5
  });

  groundFromHM.material = new BABYLON.StandardMaterial();
  groundFromHM.material.wireframe = true;

  return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});