import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductView, ProductCreateAndEditView } from './views';
import { routes } from './routes.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.PRODUCTS_VIEW} element={<ProductView />} />
        <Route path={routes.PRODUCTS_ADD} element={<ProductCreateAndEditView />} />
        <Route path={routes.PRODUCTS_EDIT + '/:id'} element={<ProductCreateAndEditView />} />
      </Routes>
    </div>
  );
};

export default App;
