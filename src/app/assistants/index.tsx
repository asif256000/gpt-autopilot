import React from "react";
import { View } from "react-native";
import { router, Stack } from "expo-router";
import { CustomButton, SettingsButton, bodyStyles } from "../../components";

export default function AssistantOptions() {
  return (
    <View style={[bodyStyles.container, { width: "100%" }]}>
      <View style={bodyStyles.settingsButtonContainer}>
        <SettingsButton onPressFunction={() => router.push("/settings")} />
      </View>
      <View style={bodyStyles.buttonContainer}>
        <CustomButton
          buttonTitle="Create Assistant"
          onPressFunction={() => console.log("Create Assistant pressed")}
        />
        <CustomButton
          buttonTitle="Modify Assistant"
          onPressFunction={() => console.log("Modify Assistant pressed")}
        />
        <CustomButton
          buttonTitle="Delete Assistant"
          onPressFunction={() => console.log("Delete Assistant pressed")}
        />
      </View>
    </View>
  );
}
