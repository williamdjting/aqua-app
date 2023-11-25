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

const ExportButton = ({ connectionStatus, setConnectionStatus }) => {


  const connectFn = () => {
    setConnectionStatus("Connected");
  }

  return (
  <SafeAreaView style={styles.container}>
    <View>

      <Button
        style={styles.button}
        title={"Export Data"}
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
    backgroundColor: '#2596be',
    padding: 10,
    margin: 10,
    
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 300,
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

export default ExportButton;