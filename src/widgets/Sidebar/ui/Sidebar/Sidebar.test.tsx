import { fireEvent, render } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders without crashing', () => {
    render(<Sidebar />);
  });

  it('toggles collapsed class on button click', () => {
    const { getByText, container } = render(<Sidebar />);
    const button = getByText('toggle');
    expect(container.firstChild).not.toHaveClass('collapsed');
    fireEvent.click(button);
    expect(container.firstChild).toHaveClass('collapsed');
  });

  it('renders children inside switchers div', () => {
    const { getByText } = render(<Sidebar><div>Test Child</div></Sidebar>);
    expect(getByText('Test Child')).toBeTruthy();
  });
});
