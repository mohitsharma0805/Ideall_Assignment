import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/lib/integration/react';
import config from './app/config';
import StorybookUIRoot from './storybook';
import { RootNavigation } from './app/navigations';

const App = () => {
  if (config.storybookEnabled) {
    return <StorybookUIRoot />;
  }

  return (
    <Provider store={config.store}>
      <PersistGate loading={null} persistor={config.persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
