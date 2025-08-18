/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  DimensionValue,
} from 'react-native';

type RoundedBtnProps = {
  label: string;
  isOutline?: boolean;
  bg?: string;
  action?: () => void;
  width?: DimensionValue; // ✅ allows number or "80%"
  borderColor?: string;
};

export default function RoundedBtn({
  label,
  isOutline = false,
  bg = '#3498db',
  action = () => {},
  width = 150,
  borderColor = '#000',
}: RoundedBtnProps) {
  return (
    <TouchableOpacity
      onPress={action}
      activeOpacity={0.7}
      accessibilityLabel={label}
      accessible
    >
      <View
        style={[
          styles.button,
          {
            backgroundColor: isOutline ? 'white' : bg,
            borderWidth: isOutline ? 2 : 0,
            borderColor,
            width, // ✅ now typed correctly
          },
        ]}
      >
        <Text
          style={[styles.text, { color: isOutline ? borderColor : 'white' }]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
