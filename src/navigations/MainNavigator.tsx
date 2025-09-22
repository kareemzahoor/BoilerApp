import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import InfoScreen from '../screens/Info';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Info" component={InfoScreen} />
      {/* Add your screens here */}
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return <StackNavigator />;
};

export default MainNavigator;
