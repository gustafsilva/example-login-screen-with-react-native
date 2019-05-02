import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styled';

const Button = ({ children, onPress }) => (
  <Container onPress={onPress}>
    <Text>{children}</Text>
  </Container>
);

Button.propTypes = {
  /** Text that will be displayed in the button. */
  children: PropTypes.string.isRequired,
  /** Function that will be called when button is pressed. */
  onPress: PropTypes.func.isRequired,
};

export default Button;
