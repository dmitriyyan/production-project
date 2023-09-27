import { PropsWithChildren, Suspense } from 'react';

import { Loader } from 'shared/ui/Loader';
import { LangToggler } from 'widgets/LangToggler';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';
import { ThemeToggler } from 'widgets/ThemeToggler';
import { classNames } from 'shared/lib/classNames';
import classes from './Layout.module.scss';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={classNames(classes.layout)}>
      <Sidebar>
        <ThemeToggler />
        <Suspense fallback={<Loader className={classNames(classes.langTogglerLoader)} />}>
          <LangToggler />
        </Suspense>
      </Sidebar>
      <div className={classNames(classes.pageWrapper)}>
        <Suspense fallback={<PageLoader/>}>
          {children}
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;