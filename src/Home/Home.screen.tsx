import { Viro360Image, Viro3DObject, ViroARScene, ViroBox, ViroImage, ViroText } from '@viro-community/react-viro'
import React from 'react'

import { HomeHooks } from './Home.hooks'

export const HomeScreen: React.FC = () => {
  const { onTrackingUpdated, onClick, index } = useHome()

  return (
    <ViroARScene onTrackingUpdated={onTrackingUpdated}>
      <ViroText
        text="Interaccion HM"
        textAlign="center"
        position={[0, 1, -10]}
        style={{ fontSize: 30, fontWeight: 'bold' }}
        outerStroke={{ type: 'Outline', width: 1, color: '#000000' }}
        animation={{ name: 'rotate', run: true, loop: true }}
      />

      <ViroImage
        position={[0, -0.5, -2]}
        height={2}
        width={2}
        source={{ uri: IMAGES[index] }}
        scale={[0.3, 0.3]}
        onClick={onClick}
        materials={['grid']}
      />

      <ViroText
        text="Playa Murcielago D=0.5Km"
        textAlign="center"
        position={[0, -5, -10]}
        style={{ fontSize: 30, fontWeight: 'bold' }}
        outerStroke={{ type: 'Outline', width: 1, color: '#000000' }}
      />
      <ViroText
        text="Distancia 0.5Km"
        textAlign="center"
        position={[0, -11.5, -20]}
        style={{ fontSize: 30, fontWeight: 'bold' }}
        outerStroke={{ type: 'Outline', width: 1, color: '#000000' }}
      />
    </ViroARScene>
  )
}

const { useHome, IMAGES } = HomeHooks
