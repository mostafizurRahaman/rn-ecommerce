import React from 'react';
import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';

type InputFieldProps = {
  placeholder: string;
  secureTextEntry?: boolean;
} & TextInputProps; // ✅ allows all native props (onChangeText, value, etc.)

const InputField = ({
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  ...rest
}: InputFieldProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#FF8904'}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        accessibilityLabel={placeholder}
        accessible
        {...rest} // ✅ spread other props like value, onChangeText, autoCapitalize
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#FF8904',
    borderBottomWidth: 1,
    width: '100%',
    paddingVertical: 5,
    marginTop: 20,
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    color: '#000',
  },
});
