import React from 'react';

import { Container } from '../../shared/ui/Container/Container';
import { ThemeButton } from '../../features/Theme/ThemeButton';
import { Button } from '../../shared/ui/Button/Button';
import { Link } from '../../shared/ui/Link/Link';

import { BiBookmarkHeart } from 'react-icons/bi';
import logoUrl from '@images/logo.png';

import { PATHS } from '../../shared/constants/routerPahts';

import {
  container,
  link,
  rightContainer,
  favoriteButton,
} from './Header.module.scss';

export const Header = () => {
  return (
    <Container>
      <header className={container}>
        <Link className={link} to="/">
          <img src={logoUrl} alt="Logo." width="40" height="40" />
          Site for finding manga!
        </Link>
        <div className={rightContainer}>
          <Link className={favoriteButton} to={PATHS.storage}>
            <Button isButton={false}>
              <BiBookmarkHeart />
              Favorite Manga
            </Button>
          </Link>
          <ThemeButton />
        </div>
      </header>
    </Container>
  );
};
