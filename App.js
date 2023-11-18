import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Pages1 from "./src/pages/Pages-1.js";
import Pages2 from "./src/pages/Pages-2.js";
import { NativeRouter, Route , Routes} from "react-router-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <NativeRouter>
        
        {/* <Routes> */} 
          <Pages1/>
          <Pages2/>
          {/* <Route path="/pages1" component={Pages1} /> */}
        {/* </Routes>
      </NativeRouter> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
