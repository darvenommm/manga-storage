import React from 'react';

import { Link } from '../../shared/ui/Link/Link';

import { Button } from '../../shared/ui/Button/Button';

import { PATHS } from '../../shared/constants/routerPahts';

const { createMangaPath } = PATHS;

export const MangaLink = ({ id, children }) => {
  return (
    <Link to={createMangaPath(id)}>
      <Button isButton={false}>{children}</Button>
    </Link>
  );
};
