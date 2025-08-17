import { ImageBackground, StyleSheet, Text } from 'react-native';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/spash.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.text}>Ecommerce App</Text>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'white',
  },
});
