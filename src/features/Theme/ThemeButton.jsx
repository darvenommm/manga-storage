import React, { useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from './logic/themeSlice';
import { setNewTheme } from './logic/themeSlice';

import { Button } from '../../shared/ui/Button/Button';

import { whoIsNextTheme } from './helpers/whoIsNextTheme';

export const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  useLayoutEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const clickButtonHanlder = () => dispatch(setNewTheme(whoIsNextTheme(theme)));

  return (
    <Button onClick={clickButtonHanlder}>
      Toggle to {whoIsNextTheme(theme)} theme
    </Button>
  );
};
