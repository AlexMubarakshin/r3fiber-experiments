import * as React from 'react';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useRender } from 'react-three-fiber';

// @ts-ignore
import { useSpring, a } from 'react-spring/three';

import './HomeContainer.styles.scss';

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = React.useRef();
  const { camera, gl } = useThree();

  // @ts-ignore
  useRender(() => orbitRef.current.update());

  // @ts-ignore
  return (<orbitControls args={[camera, gl.domElement]} ref={orbitRef} autoRotate minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 3} />)
}

const Box = () => {
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'hotpink' : 'grey',
  });

  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
    >
      <ambientLight />
      <spotLight position={[0, 5, 10]} />
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  )
}

export default () => (
  <>
    <Canvas>
      <Controls />
      <Box />
    </Canvas>
  </>
);