/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigations/AppNavigator';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/utils/utils';
import { AuthProvider } from './src/contexts/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SafeAreaProvider style={styles.container}>
            <AppNavigator />
          </SafeAreaProvider>
        </AuthProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
