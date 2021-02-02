import colors from './colors';
import local from './local';
import { store, persistor } from './store';
import routes from './routes';

const config = {
  colors,
  ...local,
  store,
  persistor,
  routes,
};

export default config;
