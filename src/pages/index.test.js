import { render, screen } from '@testing-library/react';
import Index from './index';

describe('Index component', () => {
  test('should render index component', () => {
    render(<Index />);

    expect(screen.getByText('hello world!')).toBeInTheDocument();
  });
});