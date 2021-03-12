import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findProfileIcon, largeIconSize } from '../../../../utility/profile/profile-icon';

import './ProfileIcon.css';

const profileIcon = (props) => (
  <FontAwesomeIcon icon={findProfileIcon(props.icon)} size={largeIconSize} className="ProfileIcon" />
);

export default profileIcon;
