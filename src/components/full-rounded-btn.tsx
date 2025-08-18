import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

type FullRoundedBtnProps = {
  img?: ImageSourcePropType;
  bg?: string;
  action?: () => void;
  size?: number; // 🔹 make size customizable
};

const FullRoundedBtn = ({
  img,
  bg = '#3498db', // default bg
  action = () => {},
  size = 50, // default size
}: FullRoundedBtnProps) => {
  return (
    <TouchableOpacity
      onPress={action}
      activeOpacity={0.7}
      accessibilityLabel="Rounded button"
      accessible
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: bg,
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      >
        {img && (
          <Image
            source={img}
            style={{
              width: size * 0.6, // scale image relative to size
              height: size * 0.6,
            }}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullRoundedBtn;
