import * as React from 'react';
import { Vector3 } from 'three';

type PlaneProps = {
  position?: Vector3 | number[];
  color: string;
}

const Plane: React.FC<PlaneProps> = ({ color, position }) => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={position}>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color={color} />
  </mesh>
)

export default Plane;
