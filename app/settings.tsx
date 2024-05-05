import React, { useState, Dispatch, SetStateAction } from "react";
import { Modal, TextInput, View, Text, StyleSheet } from "react-native";
import { router, useRouter } from "expo-router";
import { formStyle, bodyStyles, CustomButton } from "../src/components";

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}
interface APIKeyModalProps extends ModalProps {
  apiKey: string;
  setApiKey: Dispatch<SetStateAction<string>>;
}

const APIKeyModal: React.FC<APIKeyModalProps> = ({
  modalVisible,
  setModalVisible,
  apiKey,
  setApiKey,
}) => {
  const handleApiKeyPress = (apiKey: String) => {
    // setApiKey(apiKey);
    setModalVisible(true);
  };
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
          <Text style={bodyStyles.header1}>Please keep in mind</Text>
          <Text style={bodyStyles.header2}>
            your input here will override the existing API Key
          </Text>
          <TextInput
            inputMode="text"
            style={formStyle.textInput}
            placeholder="OpenAI API Key"
            autoFocus={true}
            placeholderTextColor={"gray"}
            value={apiKey}
            onChangeText={setApiKey}
            maxLength={50}
          />
          <CustomButton
            buttonTitle="Add API Key"
            onPressFunction={() => handleApiKeyPress(apiKey)}
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

export const SettingsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [apiKey, setApiKey] = useState("");

  return (
    <View style={styles.container}>
      <CustomButton
        buttonTitle="Login / Create Account"
        onPressFunction={() => router.navigate("/auth")}
        pressableProps={{ disabled: true }}
      />
      <CustomButton
        buttonTitle="Enter OpenAI API Key"
        onPressFunction={() => setModalVisible(true)}
      />
      <APIKeyModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        apiKey={apiKey}
        setApiKey={setApiKey}
      />
      <CustomButton
        buttonTitle="Toggle Theme"
        onPressFunction={() => console.log("Theme toggled")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
  },
});
