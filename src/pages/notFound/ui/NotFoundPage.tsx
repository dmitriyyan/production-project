import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.notFound)}>{t('Страница не найдена')}</div>
  );
};

export default NotFoundPage;