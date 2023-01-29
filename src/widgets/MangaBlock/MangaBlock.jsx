import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Info } from '../../shared/ui/Info/Info';
import { Loader } from '../../shared/ui/Loader/Loader';
import { FavoriteBlock } from '../../features/FavoriteManga/components/FavoriteBlock/FavoriteBlock';
import { MangaProperty } from '../../components/MangaPropery/MangaProperty';

import { fetchMangaById } from '../../shared/api/fetchMangaById';

import {
  container,
  textContainer,
  image,
  title,
  iconContainer,
} from './MangaBlock.module.scss';

export const MangaBlock = () => {
  const [manga, setManga] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchMangaById(id).then((newManga) => setManga(newManga));
  }, []);

  if (manga === null) {
    return (
      <Info>
        <Loader />
      </Info>
    );
  }

  return (
    <section className={container}>
      <h2 className="visually-hidden">Info about {manga.title} manga.</h2>
      <img
        className={image}
        src={manga.imageSrc}
        alt={`${manga.title} manga`}
        width="390"
        height="554"
        loading="lazy"
      />
      <div className={textContainer}>
        <h3 className={title}>{manga.title}</h3>
        <MangaProperty title="Synopsis" value={manga.synopsis} />
        <MangaProperty title="Status" value={manga.status} />
        <MangaProperty title="Series count" value={manga.countOfSeries} />
        <MangaProperty title="Rating" value={manga.rating} />
        <FavoriteBlock id={manga.id} className={iconContainer} />
      </div>
    </section>
  );
};
