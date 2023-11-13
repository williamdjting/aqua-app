import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

// const Separator = () => <View style={styles.separator} />;

const DataButton = ({ connectionStatus, receivedData, setReceivedData }) => {
  const [timer, setTimer] = useState(0);
  const [timerIntervalId, setTimerIntervalId] = useState(null);

  const startTimer = () => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 3000);
    console.log("print");
    setTimerIntervalId(intervalId);
    setReceivedData("Ready to receive data");
    
  };

  const stopTimer = () => {
    clearInterval(timerIntervalId);

  };

  const dataFn = () => {
    if (connectionStatus == "Connected") {
      setReceivedData("Data Received");

    } 

    else {
      setReceivedData("Please connect to the device first");
    }
    
  };
  const dataFn2 = () => {
    if (receivedData == "Data Received") {
      setReceivedData("Ready to receive data");
    } 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          style={styles.button}
          title={receivedData}
          onPress={() => {
            dataFn();
            dataFn2();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default DataButton;
