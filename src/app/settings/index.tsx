import React, { useState, Dispatch, SetStateAction } from "react";
import { View, Modal, TextInput, Text } from "react-native";
import { router } from "expo-router";
import {
  formStyle,
  bodyStyles,
  CustomButton,
  ModalProps,
} from "../../components";
// import { useTheme } from "../../src/context";

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
      </View>
    </Modal>
  );
};

// function ToggleTheme() {
//   const { toggleTheme } = useTheme();
//   toggleTheme();
// }

export default function SettingsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [apiKey, setApiKey] = useState("");

  return (
    <View style={[bodyStyles.container, bodyStyles.buttonContainer]}>
      <CustomButton
        buttonTitle="Login / Signup"
        onPressFunction={() => router.push("settings/auth")}
        // pressableProps={{ disabled: true }}
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
        onPressFunction={() => console.log("Theme toggled!")}
      />
      <CustomButton
        buttonTitle="Go Back"
        onPressFunction={() => router.back()}
      />
    </View>
  );
}
