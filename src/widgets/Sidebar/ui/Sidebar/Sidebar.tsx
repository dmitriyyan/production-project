import { useState } from 'react'

import { classNames } from 'shared/lib/classNames'
import { ThemeToggler } from 'shared/ui/ThemeToggler';
import classes from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(classes.sidebar, {[classes.collapsed]: isCollapsed}, [className])}>
      <button onClick={toggleSidebar}>toggle</button>
      <div className={classes.switchers}>
        <ThemeToggler/>
      </div>
    </div>
  )
}

export default Sidebar