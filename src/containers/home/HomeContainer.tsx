import * as React from 'react';
import { Canvas, extend } from 'react-three-fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// @ts-ignore
import { useSpring, a } from 'react-spring/three';

import * as THREE from 'three';

import './HomeContainer.styles.scss';

import Plane from '../../components/Plane';
import Controls from '../../components/Controls';
import Dancer from '../../components/Dancer';
import Model from '../../components/Model';
import { Euler } from 'three';

const SHREK_MODEL_URL = '/models/adrilik_shrek/scene.gltf';
const STORM_TROOPER_MODEL_URL = '/models/stormtrooper/scene.gltf';

const MAN = '/models/witness_from_fryazino/scene.gltf';

const HOME_FIRST = '/models/russian_residential_building/scene.gltf';
const HOME_SECOND = '/models/three-storey_house/scene.gltf';

const GRASS_TEXTURE = '/textures/floor.jpg';

extend({ OrbitControls });

export default () => (
  <>
    <Canvas
      camera={{
        position: [0, 3, 1]
      }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}>
      {
        // @ts-ignore
        <fog attach="fog" args={["#e8e8e8", 10, 100]} />
      }

      <ambientLight />
      <spotLight position={[4, 8, 7]} penumbra={1} angle={Math.PI / 3} />

      <Controls
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 1.9}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minDistance={1}
        maxDistance={6}
      />

      <Model src={HOME_FIRST} position={[50, -2, -58]} scale={[100, 100, 100]} rotation={new Euler(0, Math.PI / 4, 0)} />
      <Model src={HOME_SECOND} position={[-15, -1, -23]} scale={[1.3, 1.3, 1.3]} rotation={new Euler(0, 15, 0)} />
      <Model src={MAN} position={[15, -1, -15]} scale={[0.05, 0.05, 0.05]} rotation={new Euler(0, 0, 0)} />

      <Dancer position={[0, -1, 0]} src={SHREK_MODEL_URL} />
      <Dancer position={[-2, -1, -3]} src={STORM_TROOPER_MODEL_URL} />

      <Plane position={[0, -1, 0]} textureURL={GRASS_TEXTURE} />
    </Canvas>
  </>
);