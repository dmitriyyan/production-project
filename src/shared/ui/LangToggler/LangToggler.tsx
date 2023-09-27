import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

type LangTogglerProps = {
  className?: string;
}

const LangToggler = ({className}: LangTogglerProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  }

  return (
    <Button className={classNames('', {}, [className])} theme="clear" onClick={toggleLang}>{t('Язык')}</Button>
  )
}

export default LangToggler