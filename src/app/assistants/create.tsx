import React from "react";
import { View } from "react-native";
import { router, Stack } from "expo-router";
import { CustomButton, bodyStyles } from "../../components";

export default function CreateAssistantScreen() {
  return (
    <View style={[bodyStyles.container, { width: "100%" }]}>
      <CustomButton
        buttonTitle="Create Assistant"
        onPressFunction={() => console.log("Create Assistant pressed")}
      />
    </View>
  );
}
