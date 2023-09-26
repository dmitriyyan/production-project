import { render } from 'react-dom';

import { App } from 'app/App';
import { Providers } from 'app/providers';

render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root')
);