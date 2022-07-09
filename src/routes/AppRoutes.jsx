import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PageOne from '../pages/PageOne';
import PageTwo from '../pages/PageTwo';
import PageNotFound from '../pages/PageNotFound';

const AppRoutes = () => {
  
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<PageOne />} path="/PageOne" />
        <Route element={<PageTwo />} path="/PageTwo" />
        <Route element={<PageNotFound />} path="/*" />
      </Routes>
    </>
  );
};

export default AppRoutes;
