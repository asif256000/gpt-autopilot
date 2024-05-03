import { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { componentStyles, formStyle } from "./CustomStyles";

type PasswordInputProps = {
  textContentType?: "password" | "newPassword";
  passwordRules?: string;
  placeholder?: string;
};

interface CustomButtonProps {
  buttonTitle: string;
  onPressFunction: () => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={componentStyles.passwordView}>
      <TextInput
        style={[formStyle.textInput, componentStyles.passwordInput]}
        placeholder={props.placeholder || "Password"}
        textContentType={props.textContentType || "password"}
        secureTextEntry={!showPassword}
        placeholderTextColor={"gray"}
        {...props}
      />
      <MaterialCommunityIcons
        name={showPassword ? "eye-off" : "eye"}
        size={24}
        color="gray"
        style={componentStyles.icon}
        onPress={toggleShowPassword}
      />
    </View>
  );
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  buttonTitle,
  onPressFunction,
}) => {
  return (
    <Pressable style={componentStyles.button} onPress={onPressFunction}>
      <Text style={componentStyles.buttonText}>{buttonTitle}</Text>
    </Pressable>
  );
};
