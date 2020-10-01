import React from 'react';

import { ButtonStyle } from './style';

const Button = ({
  children,
  type,
  disabled,
  onClick,
  inverted,
  fullWidth,
  square,
}: {
  children: any;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: any;
  inverted?: boolean;
  fullWidth?: boolean;
  square?: boolean;
}) => {
  return (
    <>
      <ButtonStyle
        type={type || 'button'}
        disabled={!!disabled}
        inverted={!!inverted}
        fullWidth={!!fullWidth}
        square={!!square}
        onClick={onClick}
      >
        {children}
      </ButtonStyle>
    </>
  );
};

export default Button;
