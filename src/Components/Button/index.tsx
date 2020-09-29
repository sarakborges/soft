import React from 'react';

import { ButtonStyle } from './style';

const Button = ({
  children,
  type,
  classes,
  onClick,
}: {
  children: any;
  type?: 'button' | 'submit';
  classes?: Array<string>;
  onClick?: any;
}) => {
  return (
    <>
      <ButtonStyle
        type={type || 'button'}
        className={classes ? ['button', ...classes].join(' ') : 'button'}
        onClick={onClick}
      >
        {children}
      </ButtonStyle>
    </>
  );
};

export default Button;
