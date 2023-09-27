import { renderWithTranslation } from 'shared/lib/renderWithTranslation';

import LangToggler from './LangToggler';

describe('LangToggler', () => {
  it('renders without crashing', () => {
    renderWithTranslation(LangToggler);

  });

  it('applies className prop', () => {
    const { container } = renderWithTranslation(LangToggler, {className: 'test'});
    expect(container.firstChild).toHaveClass('test');
  });
});