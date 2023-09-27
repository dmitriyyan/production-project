import { render } from '@testing-library/react';
import ThemeToggler from './ThemeToggler';

describe('ThemeToggler', () => {

  it('renders without crashing', () => {
    render(<ThemeToggler />);
  });

  it('applies className prop', () => {
    const { container } = render(<ThemeToggler className="test" />);
    expect(container.firstChild).toHaveClass('test');
  });

});
