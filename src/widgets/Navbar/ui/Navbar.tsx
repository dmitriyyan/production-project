import { ABOUT_PATH, MAIN_PATH } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames'
import { AppLink } from 'shared/ui/AppLink';
import classes from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
}

const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink theme='secondary' className={classes.mainLink} to={MAIN_PATH}>Main</AppLink>
        <AppLink theme='secondary' to={ABOUT_PATH}>About</AppLink>
      </div>
    </div>
  )
}

export default Navbar;