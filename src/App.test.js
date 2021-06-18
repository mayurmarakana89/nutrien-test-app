import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app headline', () => {
  render(<App />);
  const headingElement = screen.getByText(/Nutrien Test App: Users List/i);
  expect(headingElement).toBeInTheDocument();
});
