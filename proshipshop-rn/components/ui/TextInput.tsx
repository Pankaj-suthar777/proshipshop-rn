import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";

interface TextInputComponentProps extends TextInputProps {
  Icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  errorMsg?: string;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  Icon,
  placeholder = "",
  value,
  onChangeText,
  style,
  inputStyle,
  containerStyle,
  errorMsg,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {Icon ? <View style={{ padding: 4 }}>{Icon}</View> : null}

      <TextInput
        style={[styles.input, inputStyle, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default TextInputComponent;
