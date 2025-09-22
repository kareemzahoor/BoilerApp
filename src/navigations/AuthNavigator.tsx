import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen, SignUpScreen } from '../screens/Auth';
import { AuthStackNavigatorParamList } from '../types/types';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
