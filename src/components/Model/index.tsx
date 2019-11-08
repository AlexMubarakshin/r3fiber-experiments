import * as React from 'react';
import { Vector3, Euler } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type ModelProps = {
  position?: Vector3 | number[];
  src: string;
  scale?: Vector3 | number[];

  rotation: Euler;
}

const Model: React.FC<ModelProps> = ({ position, src, scale, ...otherProps }) => {
  const [gltf, setGLTF] = React.useState();

  React.useMemo(() => new GLTFLoader().load(src, setGLTF), [src]);

  if (!gltf) {
    return null;
  }

  return (
    <primitive scale={scale} object={gltf.scene} position={position} {...otherProps} />
  )
}

export default Model;
