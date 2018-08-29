import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';
import { colors } from '../providers/styles';

const LinkIcon = styled(FiExternalLink)`
  font-size: 1rem;
  vertical-align: middle;
  color: ${colors.secondary};
  display: ${props => (props.visible ? 'inline' : 'none')};
`;

const Anchor = styled.a`
  margin-right: 1rem;
  font-size: 1rem;
  color: ${colors.primary}
`;

const Text = styled.span`
  margin-left: 0.25rem;
  height: 1rem;
  vertical-align: middle;
`;

const Link = ({ href, text, openNewTab }) => (
  <Anchor href={href} target={openNewTab ? '_blank' : '_self'}>
    <LinkIcon visible={(text.length > 0) ? 1 : 0} />
    <Text>{text}</Text>
  </Anchor>
);

Link.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  openNewTab: PropTypes.bool
};

Link.defaultProps = {
  href: '#',
  openNewTab: false
};

export default Link;
