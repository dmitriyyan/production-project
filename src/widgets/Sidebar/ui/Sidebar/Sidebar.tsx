import { useState } from 'react'

import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button';
import LangToggler from 'shared/ui/LangToggler/LangToggler';
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
      <Button onClick={toggleSidebar}>toggle</Button>
      <div className={classes.switchers}>
        <ThemeToggler />
        <LangToggler className={classes.lang} />
      </div>
    </div>
  )
}

export default Sidebar