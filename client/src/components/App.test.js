import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders home link', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Go/i);
  expect(linkElement).toBeInTheDocument();
});