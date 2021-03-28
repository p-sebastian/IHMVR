import { ViroARScene, ViroAmbientLight, ViroBox, ViroSpotLight } from '@viro-community/react-viro'
import React from 'react'

import { HomeHooks } from './Home.hooks'
import { HomeStyles as UI } from './Home.styles'

export const HomeScreen: React.FC = () => {
  const { onTrackingUpdated } = useHome()

  return (
    <ViroARScene onTrackingUpdated={onTrackingUpdated}>
      <UI.Text text="Interaccion HM hgfjhgfh" />

      <ViroBox
        position={[0, -0.5, -1]}
        animation={{ name: 'rotate', run: true, loop: true }}
        scale={[0.3, 0.3, 0.1]}
        materials={['grid']}
      />

      <ViroAmbientLight color={'#aaaaaa'} influenceBitMask={1} />

      <ViroSpotLight
        innerAngle={5}
        outerAngle={90}
        direction={[0, -1, -0.2]}
        position={[0, 3, 1]}
        color="#aaaaaa"
        castsShadow={true}
      />
    </ViroARScene>
  )
}

const { useHome } = HomeHooks
