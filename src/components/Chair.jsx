import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useCustomization } from '../contexts/Customization';

const Chair = (props) => {
  const { material, legs, chairColor, cushionColor } = useCustomization();
  const { nodes, materials } = useGLTF('./models/chair.gltf');

  const leatherTextureProps = useTexture({
    map: './textures/leather/Leather_008_Base Color.jpg',
    normalMap: './textures/leather/Leather_008_Normal.jpg',
    roughnessMap: './textures/leather/Leather_008_Roughness.jpg',
    aoMap: './textures/leather/Leather_008_Ambient Occlusion.jpg',
  });

  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);

  leatherTextureProps.normalMap.wrapS =
    leatherTextureProps.normalMap.wrapT =
    leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT =
    leatherTextureProps.aoMap.wrapS =
    leatherTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  const fabricTextureProps = useTexture({
    normalMap: './textures/fabric/Fabric_Knitted_006_normal.jpg',
    roughnessMap: './textures/fabric/Fabric_Knitted_006_roughness.jpg',
    aoMap: './textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg',
  });

  fabricTextureProps.normalMap.repeat.set(3, 3);
  fabricTextureProps.roughnessMap.repeat.set(3, 3);
  fabricTextureProps.aoMap.repeat.set(3, 3);

  fabricTextureProps.normalMap.wrapS =
    fabricTextureProps.normalMap.wrapT =
    fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT =
    fabricTextureProps.aoMap.wrapS =
    fabricTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial
          {...(material === 'leather'
            ? leatherTextureProps
            : fabricTextureProps)}
          color={chairColor.color}
        />
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} position={[0, 0.06, 0.04]}>
        <meshStandardMaterial
          {...fabricTextureProps}
          color={cushionColor.color}
        />
      </mesh>
      <mesh
        geometry={nodes.Legs1.geometry}
        material={materials.Legs}
        visible={legs === 1}
      />
      <mesh
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={legs === 2}
      />
    </group>
  );
};

useGLTF.preload('/chair.gltf');

export default Chair;
