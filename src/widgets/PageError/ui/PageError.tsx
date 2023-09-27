import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { useLocation } from 'shared/lib/useLocation';
import { Button } from 'shared/ui/Button';
import classes from './PageError.module.scss';

type PageErrorProps = {
  className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  const refreshPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(classes.pageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button theme="regular" onClick={refreshPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};

export default PageError;