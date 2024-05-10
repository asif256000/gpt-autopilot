import React from "react";
import { View, Text } from "react-native";
// import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
// import { signinGoogle, configureGoogleSignIn } from "../src/utils/";
import { CustomButton, bodyStyles } from "../../../components";
import { router } from "expo-router";

const LoginButton = () => {
  return (
    <>
      <CustomButton
        buttonTitle="Login"
        onPressFunction={() => router.push("settings/auth/login")}
      />
    </>
  );
};

const SignupButton = () => {
  return (
    <>
      <CustomButton
        buttonTitle="Create Account"
        onPressFunction={() => router.push("settings/auth/signup")}
      />
    </>
  );
};

export default function AuthScreen() {
  // const [isSignedIn, setIsSignedIn] = useState(false);
  // const [userInfo, setUserInfo] = useState<any>(undefined);
  // const [error, setError] = useState<any>(undefined);
  // useEffect(() => {
  //   configureGoogleSignIn();
  // });

  // const handleSignIn = async () => {
  //   await signinGoogle(setIsSignedIn, setUserInfo, setError);
  // };

  return (
    <View style={bodyStyles.container}>
      <Text style={bodyStyles.header1}>Welcome to{"\n"}GPT-Autopilot!</Text>
      <Text style={bodyStyles.header2}>
        Please login or create account for{"\n"}GPT-Autopilot!
      </Text>
      <View style={bodyStyles.buttonContainer}>
        <LoginButton />
        <SignupButton />
      </View>
      {/* <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      /> */}
      {/* <GoogleSigninButton
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleSignIn}
      /> */}
    </View>
  );
}
