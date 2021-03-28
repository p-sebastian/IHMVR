import { ViroARSceneNavigator } from '@viro-community/react-viro'
import React from 'react'

import { HomeScreen } from './Home/Home.screen'

const App = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HomeScreen,
      }}
      style={{ flex: 1 }}
    />
  )
}

export default App
