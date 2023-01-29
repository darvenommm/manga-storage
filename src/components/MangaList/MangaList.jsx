import React from 'react';

import { list } from './MangaList.module.scss';

export const MangaList = ({ children, className, ...props }) => {
  const listStyle = `${list} ${className || ''}`;

  return (
    <ul {...props} className={listStyle}>
      {children}
    </ul>
  );
};
