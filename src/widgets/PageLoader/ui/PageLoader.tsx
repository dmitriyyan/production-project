import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';
import classes from './PageLoader.module.scss';

const PageLoader = () => {
  return (
    <div className={classNames(classes.pageLoader)}>
      <Loader />
    </div>
  );
};

export default PageLoader;