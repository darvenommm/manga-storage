import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container } from '../../shared/ui/Container/Container';

import { Header } from '../../widgets/Header/Header';

export const Template = () => {
  return (
    <>
      <h1 className="visually-hidden">Site for finding of manga.</h1>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
