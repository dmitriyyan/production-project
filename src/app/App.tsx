import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Routing } from 'pages';
import { Sidebar } from 'widgets/Sidebar';
import 'app/styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar/>
        <div className='page-wrapper'>
          <Routing/>
        </div>
      </div>
    </div>
  );
};
