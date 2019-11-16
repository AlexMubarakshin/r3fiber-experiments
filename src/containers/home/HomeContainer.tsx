import * as React from 'react';
import { Canvas, extend, CanvasContext } from 'react-three-fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import * as THREE from 'three';

import './HomeContainer.styles.scss';

import Plane from '../../components/Plane';
import Controls from '../../components/Controls';
import Dancer from '../../components/Dancer';
import Model from '../../components/Model';
import { Euler } from 'three';
import defaultConfig from '../../config';
import { Suspense } from 'react';

const SHREK_MODEL_URL = defaultConfig.assetsPrefix + '/models/adrilik_shrek/scene.gltf';
const STORM_TROOPER_MODEL_URL = defaultConfig.assetsPrefix + '/models/stormtrooper/scene.gltf';

const MAN_MODEL_URL = defaultConfig.assetsPrefix + '/models/witness_from_fryazino/scene.gltf';

const HOME_FIRST_MODEL_URL = defaultConfig.assetsPrefix + '/models/russian_residential_building/scene.gltf';
const HOME_SECOND_MODEL_URL = defaultConfig.assetsPrefix + '/models/three-storey_house/scene.gltf';

const GRASS_TEXTURE_URL = defaultConfig.assetsPrefix + '/textures/floor.jpg';

extend({ OrbitControls });

const HomeContainer: React.FC = (): React.ReactElement => (
  <>
    <Canvas
      shadowMap
      camera={{
        position: [0, 3, 1]
      }}
      // @ts-ignore
      onCreated={({ gl }) => ((gl.shadowMap.enabled = true), (gl.shadowMap.type = THREE.PCFSoftShadowMap))}>
      {
        // @ts-ignore
        <fog attach="fog" args={['#e8e8e8', 10, 100]} />
      }

      {/* <ambientLight intensity={0.7} />
      <spotLight intensity={0.6} position={[4, 8, 7]} penumbra={1} angle={Math.PI / 3} castShadow /> */}

      <ambientLight />
      <pointLight intensity={0.5} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 10}
        position={[10, 10, 10]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Controls
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 1.9}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minDistance={1}
        maxDistance={6}
      />

      <Model src={HOME_FIRST_MODEL_URL} position={[50, -2, -58]} scale={[100, 100, 100]} rotation={new Euler(0, Math.PI / 4, 0)} />
      <Model src={HOME_SECOND_MODEL_URL} position={[-15, -1, -23]} scale={[1.3, 1.3, 1.3]} rotation={new Euler(0, 15, 0)} />
      <Model src={MAN_MODEL_URL} position={[15, -1, -15]} scale={[0.05, 0.05, 0.05]} rotation={new Euler(0, 0, 0)} />

      <Suspense fallback={null}>
        <Dancer position={[0, -1, 0]} src={SHREK_MODEL_URL} />
        <Dancer position={[-2, -1, -3]} src={STORM_TROOPER_MODEL_URL} />
      </Suspense>

      <Plane position={[0, -1, 0]} textureURL={GRASS_TEXTURE_URL} />
    </Canvas>
  </>
);

export default HomeContainer;
