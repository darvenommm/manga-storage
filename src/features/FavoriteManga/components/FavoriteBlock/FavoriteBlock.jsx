import React from 'react';

import { FavoriteButton } from '../FavoriteButton/FavoriteButton';

import { likeContainer, icon } from './FavoriteBlock.module.scss';

export const FavoriteBlock = ({ id, className, ...props }) => {
  const containerStyle = `${likeContainer} ${className || ''}`;

  return (
    <div className={containerStyle} {...props}>
      <FavoriteButton id={id} className={icon} />
      You can click to add this manga in your storage
    </div>
  );
};
