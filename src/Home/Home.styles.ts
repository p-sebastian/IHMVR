import { ViroText } from '@viro-community/react-viro'
import styled from 'styled-components/native'

export const HomeStyles = {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: red;
  `,

  Text: styled(ViroText).attrs({
    scale: [0.5, 0.5, 0.5],
    position: [0, 0, -1],
  })`
    font-size: 12px;
    color: black;
  `,
}
