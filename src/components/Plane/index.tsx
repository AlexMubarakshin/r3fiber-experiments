import * as React from 'react';
import { Vector3, RepeatWrapping, TextureLoader } from 'three';

type PlaneProps = {
  position?: Vector3 | number[];
  color?: string;
  textureURL: string;
}

const Plane: React.FC<PlaneProps> = ({ color, position, textureURL }: PlaneProps): React.ReactElement => {
  const texture = React.useMemo(() => new TextureLoader().load(textureURL), [textureURL]);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(70, 70);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={position}>
      <planeBufferGeometry attach="geometry" args={[200, 200]} />
      <meshStandardMaterial attach="material" color={color} map={texture} />
    </mesh>
  );
};

export default React.memo(Plane);
