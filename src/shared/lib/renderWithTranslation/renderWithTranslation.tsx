import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { i18nForTest } from 'shared/config/i18n/i18nForTest';


const renderWithTranslation = <T,>(Component: React.FC<T>, props?: T) => {
  return render(
    <I18nextProvider i18n={i18nForTest}>
      <Component {...props}/>
    </I18nextProvider>
  );
};

export default renderWithTranslation;