import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Template } from '../pages/Template/Template';
import { Catalog } from '../pages/Catalog/Catalog';
import { AboutManga } from '../pages/AboutManga/AboutManga';
import { MangaStorage } from '../pages/MangaStorage/MangaStorage';
import { NotFound } from '../pages/NotFound/NotFound';

import { PATHS } from '../shared/constants/routerPahts';

const { root, manga, storage } = PATHS;

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />} path={root}>
          <Route element={<Catalog />} index />
          <Route element={<AboutManga />} path={manga} />
          <Route element={<MangaStorage />} path={storage} />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
