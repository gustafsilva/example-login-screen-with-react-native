import React, { Component } from 'react';
import { Input } from 'react-native-elements';

import {
  Container,
  Logo,
  Image,
  InputBox,
  RightIconInput,
} from './styled';
import Box from '../../components/Box';
import Button from '../../components/Button';

const logoSource = require('../../../assets/logo.png');
const loginImageSource = require('../../../assets/images/login-image.png');

class LoginScreen extends Component {
  state = {
    /** Flag that indicates whether image should. */
    imageShow: true,
    username: '',
    password: '',
  };

  componentWillUnmount() {
    if (this.timoutImageShow !== undefined) {
      this.timoutImageShow = null;
    }
  }

  changeUsername = username => this.setState({ username });

  changePassword = password => this.setState({ password });

  disableImage = () => {
    if (this.timoutImageShow !== undefined) {
      clearTimeout(this.timoutImageShow);
    }
    this.setState({ imageShow: false });
  };

  enableImage = () => {
    const timeoutShow = 20;
    this.timoutImageShow = setTimeout(() => this.setState({ imageShow: true }), timeoutShow);
  };

  continue = () => {
    const { username, password } = this.state;

    // eslint-disable-next-line no-console
    console.log(`username: ${username} password: ${password}`);
  };

  render() {
    const { imageShow, username, password } = this.state;

    return (
      <Container behavior="padding">
        <Logo source={logoSource} />

        <Box title="Login">
          {imageShow === true && (<Image source={loginImageSource} />)}

          <InputBox>
            <Input
              placeholder="User Name"
              onFocus={this.disableImage}
              onEndEditing={this.enableImage}
              value={username}
              onChangeText={this.changeUsername}
            />
            <Input
              placeholder="Password"
              rightIcon={<RightIconInput>Help</RightIconInput>}
              onFocus={this.disableImage}
              onEndEditing={this.enableImage}
              value={password}
              onChangeText={this.changePassword}
              secureTextEntry
            />
          </InputBox>

          <Button onPress={this.continue}>Continue</Button>
        </Box>
      </Container>
    );
  }
}

export default LoginScreen;
