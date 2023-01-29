import React from 'react';

import { container } from './Container.module.scss';

export const Container = ({ children, className, ...otherProps }) => {
  const containerStyle = `${className} ${container || ''}`;

  return (
    <div {...otherProps} className={containerStyle}>
      {children}
    </div>
  );
};
