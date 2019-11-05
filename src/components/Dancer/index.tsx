import * as React from 'react';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector3, AnimationMixer } from 'three';
import { useFrame } from 'react-three-fiber';

type ShrekProps = {
  position?: Vector3 | number[];
  src: string;
  scale?: Vector3 | number[];
}

const Shrek: React.FC<ShrekProps> = ({ position, src, scale }) => {
  const groupRef = React.useRef();

  const speed = 1;

  const [mixer] = React.useState(() => new AnimationMixer(undefined));

  const [gltf, setGLTF] = React.useState();

  React.useMemo(() => new GLTFLoader().load(src, setGLTF), [src]);

  React.useEffect(() => {
    if (gltf) {
      const action = mixer.clipAction(gltf.animations[0], groupRef.current);
      action.play();
    }
  }, [gltf, mixer]);

  useFrame((_state, delta) => {
    if (gltf) {
      mixer.update(delta * speed);
    }
  });

  if (!gltf) {
    return null;
  }

  return (
    <group ref={groupRef} scale={scale}>
      <primitive object={gltf.scene} position={position} />
    </group>
  );
}

export default Shrek;
