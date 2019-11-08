import * as React from 'react';

import { useThree, useRender } from 'react-three-fiber';

type ControlProps = {
  autoRotate?: boolean;
  minPolarAngle?: number;
  maxPolarAngle?: number;
  minAzimuthAngle?: number;
  maxAzimuthAngle?: number;
  minDistance?: number;
  maxDistance?: number;
}

const Controls: React.FC<ControlProps> = (props) => {
  const orbitRef = React.useRef();
  const { camera, gl } = useThree();

  // @ts-ignore
  useRender(() => orbitRef.current.update());

  // @ts-ignore
  return (<orbitControls
    args={[camera, gl.domElement]}
    ref={orbitRef}
    {...props}
  />
  )
}

export default Controls;
