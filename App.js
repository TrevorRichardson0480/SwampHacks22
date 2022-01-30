import React, { useState } from "react";
import { Appbar, Button, Avatar } from "react-native-paper";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
//import { webScraper } from "./src/webScraping";
import { convertSpeechToText } from "./src/speechToText";

const MyComponent = () => {
  const _goBack = () => console.log("Went back");
  const _handleSearch = () => console.log("Searching");
  const _handleMore = () => console.log("Shown more");

  const [bodyContent, setContent] = useState("Say something...");

  const onPressMic = () => {
    if (bodyContent.localeCompare("Listening...") == 1) {
      // enter a listening state
      setContent("Listening...");
      // start listening
    } else {
      // enter a processing state
      setContent("Wait...");
      // stop listening
      // ...
      // setContent(content);
    }
  };

  //webScraper("https://en.wikipedia.org/wiki/University_of_Florida");
  //convertSpeechToText("audio.wav");
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content
          title="Super Cool App"
          subtitle="It's pretty cool ngl.."
        />
      </Appbar.Header>

      <View style={styles.body}>
        <Text style={styles.bodyText}>{bodyContent}</Text>
      </View>

      <View style={styles.buttonContent}>
        <TouchableOpacity style={styles.button} onPress={onPressMic}>
          <Avatar.Icon
            style={
              bodyContent.localeCompare("Listening...") == 0
                ? styles.buttonIconRecording
                : styles.hidden
            }
            size={130}
            icon="microphone"
          />
          <Avatar.Icon
            style={
              bodyContent.localeCompare("Listening...") == 0
                ? styles.hidden
                : styles.buttonIcon
            }
            size={100}
            icon="microphone"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F8C91",
  },
  header: {
    flex: 1,
    backgroundColor: "#033E43",
  },

  body: {
    marginHorizontal: 50,
    marginVertical: 50,
  },
  bodyText: {
    fontFamily: "Roboto",
    fontSize: 26,
  },

  buttonContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#4F8C91",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    backgroundColor: "#444444",
  },
  buttonIconRecording: {
    backgroundColor: "#444444",
    borderWidth: 15,
    borderColor: "#A30000",
  },
  hidden: {
    display: "none",
  },
});

export default MyComponent;
