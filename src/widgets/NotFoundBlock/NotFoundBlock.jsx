import React from 'react';

import { Info } from '../../shared/ui/Info/Info';

import { text } from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return <Info className={text}>Not found this page!</Info>;
};
