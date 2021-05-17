import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: auto;
`;

const Footer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Footer;
