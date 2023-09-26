import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames';
import classes from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'secondary';

type AppLinkProps = LinkProps & PropsWithChildren<{
  className?: string;
  theme?: AppLinkTheme
}>

const AppLink = ({className, children, to, theme = 'primary', ...rest}: AppLinkProps) => {
  return (
    <Link className={classNames(classes.appLink, {}, [className, classes[theme]])} to={to} {...rest}>{children}</Link>
  )
}

export default AppLink