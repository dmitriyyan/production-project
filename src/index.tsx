import ReactDOM from 'react-dom';

import { App } from 'app/App';
import { Providers } from 'app/providers';
import 'shared/config/i18n';

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root')
);
