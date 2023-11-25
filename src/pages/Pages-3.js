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
import ExportButton from "../components/Export-Button";

// const DATA = [
//   {
//     id: "1",
//     title: "First Item",
//   },
//   {
//     id: "2",
//     title: "Second Item",
//   },
//   {
//     id: "3",
//     title: "Third Item",
//   },
// ];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Pages3 = () => {
  const [connectionStatus, setConnectionStatus] = useState(
    "Connect to a device"
  );
  const [receivedData, setReceivedData] = useState("No data received yet");

  const [divList, setDivList] = useState([]);

  const printArrayElements = (array) => {
    array.forEach((element, index) => {
      console.log(`Element ${index + 1}:`, element);
    });
  };

  const addDivToList = () => {
    // const newDiv = <div key={divList.length}>New Div</div>;
    const newDiv = {
      id: (divList.length + 1).toString(), // Generating a new ID based on array length
      title: `New Item ${divList.length + 1}`, // Example title
    };
    setDivList([...divList, newDiv]);
    printArrayElements(divList);
  };

  const dataFn = () => {
    if (connectionStatus == "Connected") {
      setReceivedData("Data Received");
    } else {
      setReceivedData("Please connect to the device first");
    }
  };
  const dataFn2 = () => {
    if (receivedData == "Data Received") {
      setReceivedData("Ready to receive data");
    }
  };

  const buttonFunctions = {
    dataFn: dataFn,
    dataFn2: dataFn2,
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <div>
      {divList.map((item) => (
        <div key={item.id}>
          {/* Render each item */}
      {/* <p>{item.title}</p> */}
      {/* </div> */}
      {/* // ))} */}
      {/* </div> */}
      {/* <FlatList
        data={divList}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      /> */}
      {/* <ConnectButton
        connectionStatus={connectionStatus}
        setConnectionStatus={setConnectionStatus}
      /> */}

      <ExportButton
        connectionStatus={connectionStatus}
        setConnectionStatus={setConnectionStatus}
      />

      {/* <DataButton
        connectionStatus={connectionStatus}
        receivedData={receivedData}
        setReceivedData={setReceivedData}
        buttonFunctions={buttonFunctions}
        addDivToList={addDivToList}
      /> */}
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

export default Pages3;
