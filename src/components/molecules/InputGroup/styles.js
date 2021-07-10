import { COLORS } from 'constant/themes'
import styled from 'styled-components/native'

export const BoundContainer = styled.View`
  width: 100%;
`

export const LabelText = styled.Text`
  color: ${COLORS.white};
  font-size: ${(props) => props.fzLabel || '12px'};
`

export const TextInputValue = styled.TextInput`
  margin-top: 10px;
  color: ${COLORS.white};
  margin-top: 15px;
  padding: ${(props) => props.paddingTextInput || '5px 0'};
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.grayTransparent};
  font-size: ${(props) => props.fzInput || '15px'};
`

export const TextDesctiption = styled.Text`
  color: ${COLORS.grayTransparent};
  margin-top: 7px;
  font-size: 12px;
`
