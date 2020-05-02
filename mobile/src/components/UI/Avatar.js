import React from 'react';
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';

export const AvatarApp = ({ uri, style, size }) => (
  <Avatar
    rounded
    source={{ uri }}
    size={size}
    activeOpacity={0.4}
    containerStyle={style}
  />
);

AvatarApp.defaultProps = {
  size: 'medium',
  style: {},
};

AvatarApp.propTypes = {
  uri: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  size: PropTypes.string,
};
