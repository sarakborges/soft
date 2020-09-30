import React from 'react';

import { ButtonStyle } from './style';

const Button = ({
  children,
  type,
  classes,
  disabled,
  onClick,
  inverted,
  fullWidth,
  square,
}: {
  children: any;
  type?: 'button' | 'submit';
  classes?: Array<string>;
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
        className={classes ? ['button', ...classes].join(' ') : 'button'}
        onClick={onClick}
      >
        {children}
      </ButtonStyle>
    </>
  );
};

export default Button;
