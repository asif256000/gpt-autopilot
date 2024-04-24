// src/screens/chats.tsx
import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const chat: React.FC = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSend = () => {
    // TODO: Implement sending message to GPT and receiving response
    setChatHistory([...chatHistory, message]);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatHistory}>
        {chatHistory.map((msg, index) => (
          <Text key={index}>{msg}</Text>
        ))}
      </View>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type your message here"
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    /*...*/
  },
  chatHistory: {
    /*...*/
  },
  input: {
    /*...*/
  },
});

export default chat;
