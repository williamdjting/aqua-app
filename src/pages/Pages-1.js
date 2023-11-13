import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

import ConnectButton from "../components/Connect-Button";
import DataButton from "../components/Data-Button";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Pages1 = () => {
  const [connectionStatus, setConnectionStatus] = useState(
    "Connect to a device"
  );
  const [receivedData, setReceivedData] = useState("No data received yet");

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <ConnectButton
        connectionStatus={connectionStatus}
        setConnectionStatus={setConnectionStatus}
      />

      <DataButton
        connectionStatus={connectionStatus}
        receivedData={receivedData}
        setReceivedData={setReceivedData}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 90,
    paddingRight: 90,
    marginVertical: 8,
    marginHorizontal: 2,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
});

export default Pages1;
