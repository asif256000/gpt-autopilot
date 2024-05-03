import { StyleSheet } from "react-native";

export const bodyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export const formStyle = StyleSheet.create({
  formSheet: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: "20%",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    width: "100%",
  },
});

export const componentStyles = StyleSheet.create({
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
});
