import { classNames } from 'shared/lib/classNames';
import classes from './Loader.module.scss';

type LoaderProps = {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(classes.ldsEllipsis, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;