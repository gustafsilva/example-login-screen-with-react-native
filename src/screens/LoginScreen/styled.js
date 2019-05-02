import styled from 'styled-components/native';
import { Constants } from 'expo';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  background-color: #3656c3;
  padding-top: ${Constants.statusBarHeight + 20};
`;

export const Logo = styled.Image`
  width: 57px;
  height: 53px;
  margin-bottom: 5%;
`;

export const Image = styled.Image`
  width: 157px;
  height: 158px;
  margin-top: 10%;
`;

export const InputBox = styled.View`
  width: 100%;
  margin-top: 5%;
`;

export const RightIconInput = styled.Text`
  color: #ccc;
  font-size: 17px;
  font-weight: 400;
`;
