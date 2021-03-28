import { ViroAnimations, ViroConstants, ViroMaterials } from '@viro-community/react-viro'
import { useCallback, useState } from 'react'

const useHome = () => {
  const [ARinited, setARInited] = useState(false)
  console.info('running hooks')
  const onTrackingUpdated = useCallback((state: any, reason: any) => {
    console.info(state, reason)
    if (!ARinited && state === ViroConstants.TRACKING_NORMAL) {
      setARInited(true)
    }
  }, [])

  return { ARinited, onTrackingUpdated }
}

export const HomeHooks = { useHome }

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('../../assets/grid_bg.jpg'),
  },
})

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: '+=90',
    },
    duration: 250, //.25 seconds
  },
})
