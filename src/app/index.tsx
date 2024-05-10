import { router } from "expo-router";
import { View, SafeAreaView } from "react-native";
import { CustomButton, SettingsButton, bodyStyles } from "../components";

export default function App() {
  return (
    <SafeAreaView style={[bodyStyles.container, { width: "100%" }]}>
      {/* <View style={bodyStyles.settingsButtonContainer}>
        <SettingsButton onPressFunction={() => router.push("settings")} />
      </View> */}
      <View style={bodyStyles.buttonContainer}>
        <CustomButton
          buttonTitle="Chat"
          onPressFunction={() => console.log("Chat pressed")}
        />
        <CustomButton
          buttonTitle="Assistants"
          onPressFunction={() => router.push("assistants")}
        />
        <CustomButton
          buttonTitle="Generate Images"
          onPressFunction={() => console.log("Generate Images pressed")}
        />
        <CustomButton
          buttonTitle="Text-to-Speech"
          onPressFunction={() => console.log("Text-to-Speech pressed")}
        />
        <CustomButton
          buttonTitle="Speech-to-Text"
          onPressFunction={() => console.log("Speech-to-Text pressed")}
        />
      </View>
    </SafeAreaView>
  );
}
