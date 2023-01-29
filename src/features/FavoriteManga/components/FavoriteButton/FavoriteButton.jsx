import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectManga } from '../../logic/mangaStorageSlice';
import { addNewManga, removeManga } from '../../logic/mangaStorageSlice';

import { BsHeartFill } from 'react-icons/bs';

import { icon, iconActive } from './FavoriteButton.module.scss';

export const FavoriteButton = ({ id, className, ...props }) => {
  const dispatch = useDispatch();

  const manga = useSelector((state) => selectManga(state, id));

  const clickIconHandler = (id) => {
    dispatch(!manga ? addNewManga(id) : removeManga(id));
  };

  const iconStyle = `${!manga ? icon : iconActive} ${className || ''}`;

  return (
    <BsHeartFill
      onClick={() => clickIconHandler(id)}
      className={iconStyle}
      {...props}
    />
  );
};
