import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Routing } from 'pages';
import 'app/styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
        <div className={classNames('app', {}, [theme])}>
          <Navbar />
          <Routing/>
        </div>
  )
}
