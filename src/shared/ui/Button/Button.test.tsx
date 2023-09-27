import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('applies theme classes', () => {
    const { getByRole } = render(<Button theme="regular" />);
    expect(getByRole('button')).toHaveClass('regular');
  });

  it('applies custom classNames', () => {
    const { getByRole } = render(<Button className="custom" />);
    expect(getByRole('button')).toHaveClass('custom');
  });

  it('handles click events', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick} />);
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
