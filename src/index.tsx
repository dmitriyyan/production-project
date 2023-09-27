import { render } from 'react-dom';

import { App } from 'app/App';
import { Providers } from 'app/providers';
import 'shared/config/i18n';

render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root')
);