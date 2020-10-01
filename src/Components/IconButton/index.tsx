// Dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Styles
import { IconButtonStyle, IconButtonText } from './style';

// Component IconButton
const IconButton = ({
  children,
  icon,
  type,
  disabled,
  onClick,
}: {
  children: any;
  icon: IconProp;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: any;
}) => {
  return (
    <>
      <IconButtonStyle
        type={type || 'button'}
        disabled={!!disabled}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={icon} />
        <IconButtonText>{children}</IconButtonText>
      </IconButtonStyle>
    </>
  );
};

export default IconButton;
