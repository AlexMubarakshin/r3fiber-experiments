import * as React from 'react';
import { Canvas, extend } from 'react-three-fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// @ts-ignore
import { useSpring, a } from 'react-spring/three';

import * as THREE from 'three';

import './HomeContainer.styles.scss';

import Plane from '../../complnents/Plane';
import Controls from '../../complnents/Controls';
import Dancer from '../../complnents/Dancer';

const SHREK_MODEL_URL = '/models/adrilik_shrek/scene.gltf';
const STORM_TROOPER_MODEL_URL = '/models/stormtrooper/scene.gltf';

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
        <fog attach="fog" args={["#fff4e1", 10, 20]} />
      }

      <ambientLight />
      <spotLight position={[4, 8, 7]} penumbra={1} angle={Math.PI / 3} />

      <Controls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 1.8}
      />

      <Dancer position={[0, -1, 0]} src={SHREK_MODEL_URL} />
      <Dancer position={[-2, -1, -3]} src={STORM_TROOPER_MODEL_URL} />

      <Plane position={[0, -1, 0]} color="#9ddcdc" />
    </Canvas>
  </>
);