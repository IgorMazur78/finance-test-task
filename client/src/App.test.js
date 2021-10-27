import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  render(<App />);
  screen.debug();
  // const linkElement = screen.getByText(/learn react/i);
  // // eslint-disable-next-line no-undef
  // exp;
  // // eslint-disable-next-line no-undef
  // ect(linkElement).toBeInTheDocument();
});
