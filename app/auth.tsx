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
import { useNavigation, Link, router } from "expo-router";

interface LoginModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

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
        <Text style={styles.buttonText}>Signup</Text>
      </Pressable>
      <SignupModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
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
          <Text style={styles.header}>Login here</Text>
          <TextInput style={styles.textInput} placeholder="Username/ Email" />
          <TextInput style={styles.textInput} placeholder="Password" />
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
          <Text style={styles.header}>Create an account here</Text>
          <TextInput style={styles.textInput} placeholder="Email" />
          <TextInput style={styles.textInput} placeholder="Confirm Email" />
          <TextInput style={styles.textInput} placeholder="Select Username" />
          <TextInput style={styles.textInput} placeholder="Password" />
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Signup</Text>
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
    marginTop: 10,
    padding: 10,
    borderRadius: 15,
    width: "100%",
  },
  formSheet: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: "20%",
  },
});
