import React from 'react';

import { button } from './Button.module.scss';

export const Button = ({
  className,
  children,
  isButton = true,
  ...otherProps
}) => {
  const buttonStyle = `${button} ${className || ''}`;

  if (isButton) {
    return (
      <button className={buttonStyle} type="button" {...otherProps}>
        {children}
      </button>
    );
  }

  return (
    <div className={buttonStyle} type="button" {...otherProps}>
      {children}
    </div>
  );
};
