import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

interface SignInError {
  code: string;
}

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      "668116692023-1dql2rj1eu22e4ha613iuh0i2blajft3.apps.googleusercontent.com",
    // androidClientId:
    //   "668116692023-3img7cufq3a182nphojpebj66863djor.apps.googleusercontent.com",
    iosClientId:
      "668116692023-l3i3tsd3ojgojvsqjr0he5h2p833vr9i.apps.googleusercontent.com",
  });
};

function isErrorWithCode(error: any): error is SignInError {
  return error && typeof error.code !== "undefined";
}

export const signinGoogle = async (
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>,
  setUserInfo: React.Dispatch<React.SetStateAction<any>>,
  setError: React.Dispatch<React.SetStateAction<any>>
) => {
  console.log("Google Signin");
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    setIsSignedIn(true);
    setUserInfo(userInfo);
    console.log(userInfo);
  } catch (error) {
    const signInError = error as SignInError;
    if (isErrorWithCode(signInError)) {
      console.log(signInError.code);
      setError(signInError);
      switch (signInError.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          console.log("User cancelled the login flow");
          break;
        case statusCodes.IN_PROGRESS:
          console.log("Operation (e.g. sign in) is in progress already");
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log("Play services not available or outdated");
          break;
        default:
          console.log("Some other error happened");
      }
    } else {
      console.log("Some other error happened");
    }
  }
};

export const logoutGoogle = (
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>,
  setUserInfo: React.Dispatch<React.SetStateAction<any>>,
  setError: React.Dispatch<React.SetStateAction<any>>
) => {
  setIsSignedIn(false);
  setUserInfo(undefined);
  GoogleSignin.revokeAccess();
  GoogleSignin.signOut();
};
