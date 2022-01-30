import React, { useState } from "react";
import { Appbar, Button, Avatar } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { summarizeText } from './src/OpenAITest.js';
import { doGoogleSearch, loadGoogleAPI } from "./src/googleSearch.js";
import { startAudioRecording, stopAudioRecording } from "./audio";

const MyComponent = () => {
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  const [bodyContent, setContent] = useState("Say something...");

  const onPressMic = () => {
    if (bodyContent.localeCompare("Listening...") == 1) {
      // enter a listening state
      setContent("Listening...");
      // start listening
      startAudioRecording();

    } else {
      // enter a processing state
      setContent("Wait...");
      stopAudioRecording();
      // stop listening
      // ...
      // setContent(content);
    }
  };

  const outputGoogleResult = (r) => {
    console.log("Found google results!");
    console.log(r);
  }

  loadGoogleAPI();

  return (
    <View style={styles.container} id="content">

      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Super Cool App" subtitle="It's pretty cool ngl.." />
      </Appbar.Header>

      <View style={styles.body}>
        <Text style={styles.bodyText}>{bodyContent}</Text>
      </View>

      <View style={styles.buttonContent}>
        <TouchableOpacity style={styles.button} onPress={onPressMic}>
          <Avatar.Icon style={(bodyContent.localeCompare("Listening...") == 0) ? styles.buttonIconRecording : styles.hidden} size={130} icon="microphone" />
          <Avatar.Icon style={(bodyContent.localeCompare("Listening...") == 0) ? styles.hidden : styles.buttonIcon} size={100} icon="microphone" />
        </TouchableOpacity>
      </View>

      {/* <Button onPress={() => {summarizeText("Why is the sky blue?", "The sky is blue because of the way light scatters through the atmosphere")}}>Try OpenAI</Button> */}
      {/* Uncomment this ^^^ to test the OpenAI summarizer using a button */}

      <p id="summaryText">Summary will appear here</p>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F8C91',
  },
  header: {
    flex: 1,
    backgroundColor: '#033E43',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4F8C91',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    backgroundColor: '#444444',
  },
  buttonIconRecording: {
    backgroundColor: '#444444',
    borderWidth: 15,
    borderColor: '#A30000',
  },
  hidden: {
    display: 'none',
  },
});

export default MyComponent;
