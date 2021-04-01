import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

it('renders welcome message', () => {
  render(React.createElement(App));
  expect(screen.getByText('iphone')).toBeInTheDocument();
});
