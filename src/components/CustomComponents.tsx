import React, { useState, Dispatch, SetStateAction } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  PressableProps,
  TextProps,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { componentStyles, formStyle } from "./CustomStyles";

type PasswordInputProps = {
  textContentType?: "password" | "newPassword";
  passwordRules?: string;
  placeholder?: string;
};

interface CustomButtonProps {
  buttonTitle: string;
  onPressFunction: () => void;
  pressableProps?: PressableProps;
  textProps?: TextProps;
}

interface SettingsButtonProps {
  size?: number;
  color?: string;
  onPressFunction: () => void;
}

export interface ModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
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
  pressableProps,
  textProps,
}) => {
  return (
    <Pressable
      style={componentStyles.button}
      onPress={onPressFunction}
      {...pressableProps}
    >
      <Text style={componentStyles.buttonText} {...textProps}>
        {buttonTitle}
      </Text>
    </Pressable>
  );
};

export const SettingsButton: React.FC<SettingsButtonProps> = ({
  size = 24,
  color = "#000",
  onPressFunction,
}) => {
  return (
    <Ionicons
      name="settings-outline"
      size={size}
      color={color}
      onPress={onPressFunction}
    />
  );
};
