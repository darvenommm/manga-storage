import React from 'react';

import { MangaList } from '../../../../components/MangaList/MangaList';
import { Loader } from '../../../../shared/ui/Loader/Loader';

import { bottomLoaderContainer } from './MangaElementsList.module.scss';

export const MangaElementsList = ({ elements }) => {
  return (
    <>
      <MangaList>{elements}</MangaList>
      <div className={bottomLoaderContainer}>
        <Loader />
      </div>
    </>
  );
};
