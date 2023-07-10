import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/期货品种3D可视化动态模型曲线/i);
  expect(linkElement).toBeInTheDocument();
});
