import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

it('Navbar PC render', () => {
  render(React.createElement(App));
  expect(screen.getByText('Mac')).toBeInTheDocument();
  expect(screen.getByText('iPad')).toBeInTheDocument();
  expect(screen.getByText('iPhone')).toBeInTheDocument();
  expect(screen.getByText('Watch')).toBeInTheDocument();
  expect(screen.getByText('Music')).toBeInTheDocument();
  expect(screen.getByText('고객지원')).toBeInTheDocument();
  expect(screen.getByText('검색')).toBeInTheDocument();
});

// todo
// it('Navbar Mobile render', () => {
// });
