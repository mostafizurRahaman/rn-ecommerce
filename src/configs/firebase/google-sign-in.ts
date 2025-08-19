import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from '@react-native-firebase/auth';

// ** Configure Google Sign In:

// [ ]: 1 Configure the google sign
GoogleSignin.configure({
  offlineAccess: false,
  // [ ] 2:  Get it from firebase
  webClientId:
    '862766985381-ufdoucj0ma4okgb231nbq24kp2hsrf6s.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});

// [ ] 3: write the function for signInWithGoogle :

export const signInWithGoogle = async () => {
  try {
    // [ ] 4: Check if your device supports Google Play
    GoogleSignin?.hasPlayServices({
      showPlayServicesUpdateDialog: false,
    });

    // [ ] 5: Get user id token:
    const signInResult = await GoogleSignin?.signIn();

    let idToken = signInResult?.data?.idToken;

    // [ ] 6: Check ID token :
    if (!idToken) {
      // @ts-ignore
      idToken = signInResult?.idToken;
    }

    if (!idToken) {
      throw new Error('No ID token found');
    }

    // [ ] 7: Get google credential :
    const googleCredential = GoogleAuthProvider.credential(idToken);

    // [ ] 8: Get Sign user :
    return signInWithCredential(getAuth(), googleCredential);
  } catch (error) {
    console.log(`Google Provider ->>-->:-->`, error);
  }
};

// PASSWORD : ##Mostafiz0401##
