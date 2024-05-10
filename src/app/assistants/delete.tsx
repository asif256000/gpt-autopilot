import React from "react";
import { View } from "react-native";
import { router, Stack } from "expo-router";
import { CustomButton, bodyStyles } from "../../components";

export default function DeleteAssistantScreen() {
  return (
    <View style={[bodyStyles.container, { width: "100%" }]}>
      <CustomButton
        buttonTitle="Delete Assistant"
        onPressFunction={() => console.log("Delete Assistant pressed")}
      />
    </View>
  );
}
