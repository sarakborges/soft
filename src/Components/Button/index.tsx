import React from 'react';

import { ButtonStyle } from './style';

const Button = ({
  children,
  type,
  classes,
  onClick,
  inverted,
  fullWidth,
}: {
  children: any;
  type?: 'button' | 'submit';
  classes?: Array<string>;
  onClick?: any;
  inverted?: boolean;
  fullWidth?: boolean;
}) => {
  return (
    <>
      <ButtonStyle
        type={type || 'button'}
        inverted={!!inverted ? true : false}
        fullWidth={!!fullWidth ? true : false}
        className={classes ? ['button', ...classes].join(' ') : 'button'}
        onClick={onClick}
      >
        {children}
      </ButtonStyle>
    </>
  );
};

export default Button;
