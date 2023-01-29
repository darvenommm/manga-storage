import React from 'react';

import { MangaLink } from '../MangaLink/MangaLink';
import { FavoriteBlock } from '../../features/FavoriteManga/components/FavoriteBlock/FavoriteBlock';

import { cutSentence } from './helpers/cutSentence';

import {
  item,
  image,
  textContainer,
  title as titleStyle,
  text,
  status as statusStyle,
  bottomContainer,
} from './MangaCard.module.scss';

export const MangaCard = ({ id, index, title, synopsis, status, imageSrc }) => {
  const truncatedSynopsis = cutSentence(synopsis, 40);

  return (
    <li title={title} className={item}>
      <img
        className={image}
        src={imageSrc}
        alt={`Manga: ${title}`}
        width="280"
        height="400"
        loading="lazy"
      />
      <div className={textContainer}>
        <div>
          <h3 className={titleStyle}>
            {index}: {title}
          </h3>
          <p className={text}>{truncatedSynopsis}</p>
        </div>
        <div className={bottomContainer}>
          <p className={statusStyle}>status: {status}</p>
          <MangaLink id={id}>Go to Manga</MangaLink>
        </div>
      </div>
      <FavoriteBlock id={id} />
    </li>
  );
};
