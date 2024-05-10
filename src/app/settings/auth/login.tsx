import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  CustomButton,
  PasswordInput,
  bodyStyles,
  formStyle,
} from "../../../components";
import { router } from "expo-router";

export default function LoginScreen() {
  return (
    <View style={formStyle.formSheet}>
      <View style={{ alignItems: "center" }}>
        <Text style={bodyStyles.header2}>Login here</Text>
        <TextInput
          inputMode="email"
          style={formStyle.textInput}
          placeholder="Username/ Email"
          textContentType="emailAddress"
          autoFocus={true}
          placeholderTextColor={"gray"}
        />
        <PasswordInput />
        <CustomButton
          buttonTitle="Login"
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
