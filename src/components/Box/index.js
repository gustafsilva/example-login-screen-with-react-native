import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Title,
} from './styled';

const Box = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>

    {children}
  </Container>
);

Box.propTypes = {
  /** Title that will be displayed at the top of the Box. */
  title: PropTypes.string.isRequired,
  /** Element that will be rendered in the body of the Box. */
  children: PropTypes.node.isRequired,
};

export default Box;
