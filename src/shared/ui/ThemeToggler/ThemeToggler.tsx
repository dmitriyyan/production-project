import { useTheme, THEME } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeTogglerProps {
  className?: string
}

const ThemeToggler = ({ className }: ThemeTogglerProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme="clear" className={classNames('', {}, [className])} onClick={toggleTheme}>
      {theme === THEME.LIGHT ? <LightIcon /> : <DarkIcon/> }
    </Button>
  );
};

export default ThemeToggler;
