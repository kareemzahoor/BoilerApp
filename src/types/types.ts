// Auth Stack Navigator Types
export type AuthStackNavigatorParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  OtpVerification: { email?: string; isResetPassword?: boolean };
  NewPassword: { email?: string; isResetPassword?: boolean };
};

export type BottomTabNavigatorParamList = {
  HomeScreen: undefined;
  Profile: undefined;
};
