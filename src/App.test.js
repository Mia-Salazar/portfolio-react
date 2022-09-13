import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

test('renders learn react link', () => {
  const Loader = () => (
    <div>loading...</div>
  );

  render(
  	<BrowserRouter basename="/">
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/loading.../i);
  expect(linkElement).toBeInTheDocument();
});