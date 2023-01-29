import React from 'react';

import { title as titleStyle } from './MangaProperty.module.scss';

export const MangaProperty = ({ title, value }) => {
  return (
    <p>
      <span className={titleStyle}>{title}:</span> {value}
    </p>
  );
};
