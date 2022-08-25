import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PermissionsProvider} from './src/context/permissionsContext';
import {HomeScreen} from './src/screens/home';

const App = () => {
  useEffect(() => {}, []);

  const AppState = ({children}: any) => {
    return <PermissionsProvider>{children}</PermissionsProvider>;
  };

  return (
    <SafeAreaProvider>
      <AppState>
        <HomeScreen />
      </AppState>
    </SafeAreaProvider>
  );
};

export default App;
