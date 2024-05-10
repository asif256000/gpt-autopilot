import React from "react";
import { View } from "react-native";
import { router, Stack } from "expo-router";
import { CustomButton, bodyStyles } from "../../components";

export default function UpdateAssistantScreen() {
  return (
    <View style={[bodyStyles.container, { width: "100%" }]}>
      <CustomButton
        buttonTitle="Update Assistant"
        onPressFunction={() => console.log("Update Assistant pressed")}
      />
    </View>
  );
}
