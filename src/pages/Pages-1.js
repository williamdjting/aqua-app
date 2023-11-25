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

import { createContext } from 'react';


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

const Pages1 = () => {


  const [connectionStatus, setConnectionStatus] = useState(
    "Connect to a device"
  );
  const [receivedData, setReceivedData] = useState("No data received yet");

  const [divList, setDivList] = useState([]);

  const [storageList, setStorageList] = useState([]);

  const [divCounter, setDivCounter] = useState(0);

  const printArrayElements = (array) => {
    // array.forEach((element, index) => {
    // console.log(`Element ${index + 1}:`, element);
    // });
    console.log(array);
  };

  const addDivToList = () => {
    // const newDiv = <div key={divList.length}>New Div</div>;
    const newDiv = {
      id: divCounter.toString(), // Generating a new ID based on array length
      title: `Read ${divCounter}`, // Example title
      description: `This is data for read ${divCounter}`,
    };

    setDivList([newDiv]);
    setStorageList([...storageList, newDiv]);
    
    var newStorageArray = JSON.stringify(storageList);
    
    localStorage.setItem("storageList", newStorageArray);
    setDivCounter(divCounter + 1);
    printArrayElements(newStorageArray);
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

      <FlatList
        data={divList}
        renderItem={({ item }) => (
          <Item title={item.title} 
          description={item.description} />
        )}
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
        buttonFunctions={buttonFunctions}
        addDivToList={addDivToList}
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
    backgroundColor: "#2596be",
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
