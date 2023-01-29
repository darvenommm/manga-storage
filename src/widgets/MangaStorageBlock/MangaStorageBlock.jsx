import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { selectAllManga } from '../../features/FavoriteManga/logic/mangaStorageSlice';

import { MangaCard } from '../../components/MangaCard/MangaCard';
import { MangaList } from '../../components/MangaList/MangaList';
import { Info } from '../../shared/ui/Info/Info';
import { Loader } from '../../shared/ui/Loader/Loader';

import { fetchMangaById } from '../../shared/api/fetchMangaById';

export const MangaStorageBlock = () => {
  const favoriteManga = useSelector(selectAllManga);

  const [manga, setManga] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setManga([]);
  }, [favoriteManga]);

  useEffect(() => {
    favoriteManga.map(({ id }) =>
      fetchMangaById(id)
        .then((newManga) => setManga((prevState) => [...prevState, newManga]))
        .finally(() => setIsLoading(false)),
    );
  }, [favoriteManga]);

  if (favoriteManga.length === 0) {
    return <Info>You don't have favorite manga</Info>;
  }

  if (isLoading) {
    return (
      <Info>
        <Loader />
      </Info>
    );
  }

  const mangaElements = manga.map((manga, index) => (
    <MangaCard key={manga.id} index={index + 1} {...manga}>
      {manga.title}
    </MangaCard>
  ));

  return (
    <section>
      <h2 className="visually-hidden">List of favorite manga.</h2>
      <MangaList>{mangaElements}</MangaList>
    </section>
  );
};
