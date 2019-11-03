import * as React from 'react';
import { Canvas, extend } from 'react-three-fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// @ts-ignore
import { useSpring, a } from 'react-spring/three';

import * as THREE from 'three';

import './HomeContainer.styles.scss';

import Plane from '../../complnents/Plane';
import Controls from '../../complnents/Controls';
import Shrek from '../../complnents/Shrek';

extend({ OrbitControls });

export default () => (
  <>
    <Canvas
      camera={{
        position: [0, 2, 1]
      }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}>
      {
        // @ts-ignore
        <fog attach="fog" args={["#fff", 10, 20]} />
      }

      <ambientLight />
      <spotLight position={[4, 8, 7]} penumbra={1} angle={Math.PI / 3} />

      <Controls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 1.8}
      />

      <Shrek position={[0, -1, 0]} />
      <Plane position={[0, -1, 0]} color="white" />
    </Canvas>
  </>
);