import * as React from 'react';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector3, AnimationMixer } from 'three';

const SHREK_MODEL_URL = '/models/adrilik_shrek/scene.gltf';

type ShrekProps = {
  position?: Vector3 | number[];
}

const Shrek: React.FC<ShrekProps> = ({ position }) => {
  const groupRef = React.useRef();

  const [mixer] = React.useState(() => new AnimationMixer(undefined));

  const [gltf, setGLTF] = React.useState()
  React.useMemo(() => new GLTFLoader().load(SHREK_MODEL_URL, setGLTF), [SHREK_MODEL_URL]);

  React.useEffect(() => {
    if (gltf) {
      const action = mixer.clipAction(gltf.animations[0], groupRef.current);
      action.play();
    }
  }, [gltf, mixer]);
  
  if (!gltf) {
    return null;
  }
  
  // debugger;

  return (

    <group ref={groupRef}>
      <primitive object={gltf.scene} position={position} />
    </group>
  );
}

export default Shrek;
