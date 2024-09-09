import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headingElement = screen.getByText(/welcome to eCourse/i);
  expect(headingElement).toBeInTheDocument();
});
