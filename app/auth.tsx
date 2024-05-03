import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TextInput } from "react-native";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { signinGoogle, configureGoogleSignIn } from "../src/utils/";
import { PasswordInput, CustomButton } from "../src/components/";
import { bodyStyles, formStyle } from "../src/components/";

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const LoginModal: React.FC<ModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
      animationType="slide"
      presentationStyle="formSheet"
      // transparent={true}
    >
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
            onPressFunction={() => setModalVisible(false)}
          />
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
    </Modal>
  );
};

const SignupModal: React.FC<ModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
      animationType="slide"
      presentationStyle="formSheet"
      // transparent={true}
    >
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
            onPressFunction={() => setModalVisible(false)}
          />
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
    </Modal>
  );
};

const LoginButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <CustomButton
        buttonTitle="Login"
        onPressFunction={() => setModalVisible(true)}
      />
      <LoginModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

const SignupButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <CustomButton
        buttonTitle="Create Account"
        onPressFunction={() => setModalVisible(true)}
      />
      <SignupModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export const AuthScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(undefined);
  const [error, setError] = useState<any>(undefined);
  useEffect(() => {
    configureGoogleSignIn();
  });

  const handleSignIn = async () => {
    await signinGoogle(setIsSignedIn, setUserInfo, setError);
  };

  return (
    <View style={bodyStyles.container}>
      <Text style={bodyStyles.header1}>Welcome to{"\n"}GPT-Autopilot!</Text>
      <Text style={bodyStyles.header2}>
        Please login or create account for{"\n"}GPT-Autopilot!
      </Text>
      <View style={bodyStyles.buttonContainer}>
        <LoginButton />
        <SignupButton />
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleSignIn}
      />
    </View>
  );
};
