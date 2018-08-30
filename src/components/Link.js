import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';
import { colors } from '../providers/styles';

/**
 * Styled Link Icon
 */
const LinkIcon = styled(FiExternalLink)`
  font-size: 1rem;
  vertical-align: middle;
  color: ${colors.secondary};
  /**
   * Control rendering using "visible" prop
   */
  display: ${props => (props.visible ? 'inline' : 'none')};
`;

/**
 * Styled <a> tag
 */
const Anchor = styled.a`
  margin-right: 1rem;
  font-size: 1rem;
  color: ${colors.primary}
`;

/**
 * Styled <text> tag
 */
const Text = styled.span`
  margin-left: 0.25rem;
  height: 1rem;
  vertical-align: middle;
`;

/**
 * Link UI Component
 */
const Link = ({ href, text, openNewTab }) => (
  <Anchor href={href} target={openNewTab ? '_blank' : '_self'}>
    <LinkIcon visible={(text.length > 0) ? 1 : 0} />
    <Text>{text}</Text>
  </Anchor>
);

Link.propTypes = {
  /**
   * Link destinatinon
   */
  href: PropTypes.string,
  /**
   * Link display text
   */
  text: PropTypes.string.isRequired,
  /**
   * Should open new tab
   */
  openNewTab: PropTypes.bool
};

Link.defaultProps = {
  href: '#',
  openNewTab: false
};

export default Link;
