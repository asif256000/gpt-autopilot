import React, { useState, Dispatch, SetStateAction } from "react";
import {
  Button,
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface LoginModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

type PasswordInputProps = {
  textContentType?: "password" | "newPassword";
  passwordRules?: string;
  placeholder?: string;
};

const LoginButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    // <Button title="Login" onPress={() => router.navigate("/auth/login")} />
    <>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}
        // onPress={() => router.navigate("/auth/login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
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
    // <Button title="Signup" onPress={() => router.navigate("/auth/login")} />
    <>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}
        // onPress={() => router.navigate("/auth/login")}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>
      <SignupModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.passwordView}>
      <TextInput
        style={[styles.textInput, styles.passwordInput]}
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
        style={styles.icon}
        onPress={toggleShowPassword}
      />
    </View>
  );
};

const LoginModal: React.FC<LoginModalProps> = ({
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
      <View style={styles.formSheet}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.header2}>Login here</Text>
          <TextInput
            inputMode="email"
            style={styles.textInput}
            placeholder="Username/ Email"
            textContentType="emailAddress"
            autoFocus={true}
            placeholderTextColor={"gray"}
          />
          <PasswordInput />
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
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

const SignupModal: React.FC<LoginModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
      animationType="slide"
      presentationStyle="formSheet"
    >
      <View style={styles.formSheet}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.header2}>Create an account here</Text>
          <TextInput
            inputMode="email"
            style={styles.textInput}
            placeholder="Email"
            textContentType="emailAddress"
            autoFocus={true}
            placeholderTextColor={"gray"}
          />
          <TextInput
            style={styles.textInput}
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
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
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

export const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Welcome to{"\n"}GPT-Autopilot!</Text>
      <Text style={styles.header2}>
        Please login or signup to use{"\n"}GPT-Autopilot!
      </Text>
      <View style={styles.buttonContainer}>
        <LoginButton />
        <SignupButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  header1: {
    fontSize: 42,
    textAlign: "center",
    margin: 20,
    fontWeight: "bold",
  },
  header2: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 14,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    width: "100%",
  },
  passwordInput: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0,
  },
  passwordView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    marginLeft: 10,
    position: "absolute",
    right: 10,
  },
  formSheet: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: "20%",
  },
});
