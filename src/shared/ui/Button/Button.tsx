import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';

import { classNames } from 'shared/lib/classNames';
import classes from './Button.module.scss';

type ThemeButton = 'clear'

type ButtonProps = PropsWithChildren<{
  className?: string
  theme?: ThemeButton
}> & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ className, children, theme = 'clear', ...rest }: ButtonProps) => {
  return (
    <button className={classNames(classes.button, {}, [className, classes[theme]])} {...rest}>
      {children}
    </button>
  );
};

export default Button;
