/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../components/input-field';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RoundedBtn from '../../components/rounded-btn'; // ✅ use your reusable button

export default function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />

      <View style={styles.titleSection}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>Sign up here</Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={styles.form}
        // extraScrollHeight={50}
        keyboardShouldPersistTaps="handled"
        enableAutomaticScroll
      >
        <InputField placeholder="Email" keyboardType="email-address" />
        <InputField placeholder="Password" secureTextEntry />
        <InputField placeholder="Confirm Password" secureTextEntry />

        {/* Submit Button */}
        <RoundedBtn
          label="Create Account"
          bg="#FF8904"
          action={() => console.log('Sign Up pressed')}
          width="100%"
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: '#FF8904',
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  titleSection: {
    flex: 0.5,
  },
  form: {
    flex: 1,
    gap: 15, // ✅ evenly spaces inputs/buttons
  },
});
