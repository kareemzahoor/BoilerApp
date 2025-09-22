import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import { BottomTabNavigatorParamList } from '../types/types';
import Ionicons from '@react-native-vector-icons/ionicons';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Ionicons name="cog" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
