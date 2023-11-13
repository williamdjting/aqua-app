import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

// const Separator = () => <View style={styles.separator} />;

const ConnectButton = ({ connectionStatus, setConnectionStatus }) => {


  const connectFn = () => {
    setConnectionStatus("Connected");
  }

  return (
  <SafeAreaView style={styles.container}>
    <View>

      <Button
        style={styles.button}
        title={connectionStatus}
        onPress={() => {
          connectFn();
        }}
      />
    </View>
    
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ConnectButton;