import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/SpashScreen';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SplashScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
