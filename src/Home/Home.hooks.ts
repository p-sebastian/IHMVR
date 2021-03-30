import { ViroAnimations, ViroConstants, ViroMaterials } from '@viro-community/react-viro'
import { useCallback, useState } from 'react'

const useHome = () => {
  const [ARinited, setARInited] = useState(false)
  const [index, setIndex] = useState(0)

  const onTrackingUpdated = useCallback((state: any, reason: any) => {
    console.info(state, reason)
    if (!ARinited && state === ViroConstants.TRACKING_NORMAL) {
      setARInited(true)
    }
  }, [])

  const onClick = useCallback(() => {
    setIndex(index === IMAGES.length - 1 ? 0 : index + 1)
  }, [index])

  return { ARinited, onTrackingUpdated, onClick, index }
}

const IMAGES = [
  'https://instagram.fgye1-1.fna.fbcdn.net/v/t51.2885-15/e15/11356673_726656920790936_1799559969_n.jpg?tp=1&_nc_ht=instagram.fgye1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=N_tTcXeK8AAAX8F1a_D&ccb=7-4&oh=6a3ba3164a9a55b9dabe25f9531a382c&oe=608B56C0&_nc_sid=83d603',
  'https://instagram.fgye1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/89261286_563234414547309_267620023685556493_n.jpg?tp=1&_nc_ht=instagram.fgye1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=dJh_SEv21IgAX_iCDQt&ccb=7-4&oh=977636701231bd4132d78ad401fa42ac&oe=608D8B80&_nc_sid=83d603',
  'https://instagram.fgye1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/66325880_367358604164203_1006380715541683862_n.jpg?tp=1&_nc_ht=instagram.fgye1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Q_3wm76pwPkAX8xdM3M&ccb=7-4&oh=ca4acd6ba4f61ca93a8a944422d80992&oe=608DA748&_nc_sid=83d603',
  'https://instagram.fgye1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/74600052_132997267689180_4223014807496036068_n.jpg?tp=1&_nc_ht=instagram.fgye1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=LmeDBuLgwMkAX--vZdA&ccb=7-4&oh=b74861a0321763e2efffa1a09c64ad69&oe=608BA625&_nc_sid=83d603',
]
export const HomeHooks = { useHome, IMAGES }

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
