import React from 'react';

import { container } from './Info.module.scss';

export const Info = ({ children, className, ...props }) => {
  const infoStyle = `${container} ${className || ''}`;

  return (
    <div className={infoStyle} {...props}>
      {children}
    </div>
  );
};
