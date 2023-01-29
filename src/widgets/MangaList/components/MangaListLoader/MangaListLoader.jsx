import React from 'react';

import { Info } from '../../../../shared/ui/Info/Info';
import { Loader } from '../../../../shared/ui/Loader/Loader';

export const MangaListLoader = (props) => {
  return (
    <Info {...props}>
      <Loader />
    </Info>
  );
};
