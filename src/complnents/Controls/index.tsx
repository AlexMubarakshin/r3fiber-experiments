import * as React from 'react';

import { useThree, useRender } from 'react-three-fiber';

type ControlProps = {
  autoRotate?: boolean;
  minPolarAngle?: number;
  maxPolarAngle?: number;
}

const Controls: React.FC<ControlProps> = ({ autoRotate, minPolarAngle, maxPolarAngle }) => {
  const orbitRef = React.useRef();
  const { camera, gl } = useThree();

  // @ts-ignore
  useRender(() => orbitRef.current.update());

  // @ts-ignore
  return (<orbitControls
    args={[camera, gl.domElement]}
    ref={orbitRef}
    autoRotate={autoRotate}
    minPolarAngle={minPolarAngle}
    maxPolarAngle={maxPolarAngle}
  />
  )
}

export default Controls;
