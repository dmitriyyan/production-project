import { PropsWithChildren, useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import classes from './Sidebar.module.scss';

type SidebarProps = PropsWithChildren<{
  className?: string
}>

const Sidebar = ({ className, children }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, [className])}>
      <Button onClick={toggleSidebar}>toggle</Button>
      <div className={classes.switchers}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
