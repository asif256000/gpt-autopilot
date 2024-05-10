import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  CustomButton,
  PasswordInput,
  bodyStyles,
  formStyle,
} from "../../../components";
import { router } from "expo-router";

export default function SignupScreen() {
  return (
    <View style={formStyle.formSheet}>
      <View style={{ alignItems: "center" }}>
        <Text style={bodyStyles.header2}>Create an account here</Text>
        <TextInput
          inputMode="email"
          style={formStyle.textInput}
          placeholder="Email"
          textContentType="emailAddress"
          autoFocus={true}
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={formStyle.textInput}
          placeholder="Select Username"
          textContentType="username"
          placeholderTextColor={"gray"}
        />
        <PasswordInput
          textContentType="newPassword"
          passwordRules="minlength: 10; maxlength: 30; required: lower; required: upper; required: digit; required: [-@_];"
        />
        <PasswordInput
          placeholder="Confirm Password"
          textContentType="newPassword"
        />
        <CustomButton
          buttonTitle="Create Account"
          onPressFunction={() => router.back()}
        />
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    </View>
  );
}
