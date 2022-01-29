import * as React from 'react';
import { Appbar, Button, Avatar } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

const MyComponent = () => {
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  //const [bodyContent, setContent] = useState("Say something...");

  //const onPressMic = () => {
  //  if (bodyContent.localeCompare("Say something...") == 0)
    //setContent("Listening...");
//  };

  return (
    <View style={styles.container}>

      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Super Cool App" subtitle="It's pretty cool ngl.." />
      </Appbar.Header>

      <View style={styles.body}>
        <Text style={styles.bodyText}>bodyContent</Text>
      </View>

      <View style={styles.buttonContent}>
        <TouchableOpacity style={styles.button}>
          <Avatar.Icon style={styles.buttonIcon} size={100} icon="microphone" />
        </TouchableOpacity>
      </View>

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
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    backgroundColor: '#444444',
  }
});

export default MyComponent;
