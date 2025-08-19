import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  useColorScheme,
} from 'react-native';
import RoundedBtn from '../../components/rounded-btn';
import FullRoundedBtn from '../../components/full-rounded-btn';
import { useNavigation } from '@react-navigation/native';
import { signInWithGoogle } from '../../configs/firebase/google-sign-in';

export default function SignIn() {
  const navigation = useNavigation();
  const barStyle =
    useColorScheme() === 'dark' ? 'light-content' : 'dark-content';
  return (
    <View style={styles.cotainer}>
      <StatusBar
        barStyle={barStyle}
        translucent
        animated
        // networkActivityIndicatorVisible={false}
        backgroundColor={'#faf7e3'}
      />
      <View style={styles.topSection}>
        <Image
          style={styles.loginImg}
          source={require('../../assets/login.png')}
          resizeMode="cover"
        />
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>Welcome to our Ecommerce APP</Text>

        <View style={styles.btnContainer}>
          <RoundedBtn
            bg="blue"
            label="Sign In"
            action={() => {
              navigation.navigate('SignIn');
            }}
          />
          <RoundedBtn
            label="Sign Up"
            isOutline
            action={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
        <View style={styles.socialContainer}>
          <Text style={styles.socialLabel}>Or via social media account</Text>
          <View style={styles.socialIconContainer}>
            <FullRoundedBtn
              bg="blue"
              img={require('../../assets/social.png')}
              action={() => console.log('logged')}
            />
            <FullRoundedBtn
              bg="red"
              img={require('../../assets/search.png')}
              action={async () => {
                const signInfo = await signInWithGoogle();
                console.log(signInfo);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    backgroundColor: '#faf7e3',
    padding: 20,
  },
  topSection: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImg: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 0.5,
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 20,
  },
  socialContainer: {
    flex: 1,
    gap: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  socialLabel: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  socialIconContainer: {
    display: 'flex',
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
