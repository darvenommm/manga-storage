import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { link } from './Link.module.scss';

export const Link = ({ children, className, ...props }) => {
  const linkStyle = `${className || ''} ${link}`;

  return (
    <RouterLink className={linkStyle} {...props}>
      {children}
    </RouterLink>
  );
};
