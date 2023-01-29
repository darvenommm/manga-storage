import React, { useState, useEffect } from 'react';

import { MangaCard } from '../../components/MangaCard/MangaCard';
import { MangaListLoader } from './components/MangaListLoader/MangaListLoader';
import { MangaElementsList } from './components/MangaElementsList/MangaElementsList';

import { fetchNewManga } from '../../shared/api/fetchNewMangaList';

import { container } from './MangaList.module.scss';

const COUNT_OF_MANGA = 12;

export const MangaList = () => {
  const [manga, setManga] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetch, setIsFetch] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (isFetch) {
      fetchNewManga(COUNT_OF_MANGA, offset).then((newManga) => {
        setManga((prevState) => [...prevState, ...newManga]);
        setIsFetch(false);
        setIsLoading(false);
        setOffset((prevState) => prevState + COUNT_OF_MANGA);
      });
    }
  }, [isFetch]);

  useEffect(() => {
    const scrollWindowHandler = () => {
      const doc = document.documentElement;

      if (doc.scrollHeight - 600 < doc.scrollTop + doc.clientHeight) {
        setIsFetch(true);
      }
    };

    document.addEventListener('scroll', scrollWindowHandler);

    return () => document.removeEventListener('scroll', scrollWindowHandler);
  }, []);

  const mangaElements = manga.map(({ id, ...manga }, index) => (
    <MangaCard key={index} id={id} index={index + 1} {...manga} />
  ));

  return (
    <section className={container}>
      <h2 className="visually-hidden">Manga List.</h2>
      {isLoading ? (
        <MangaListLoader />
      ) : (
        <MangaElementsList elements={mangaElements} />
      )}
    </section>
  );
};
