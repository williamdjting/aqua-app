import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Pages1 from "./src/pages/Pages-1.js";
import Pages2 from "./src/pages/Pages-2.js";
import { NativeRouter, Route , Routes} from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Homepage</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Pages1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



// below is old way to show App.js at the root

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" /> */}
//       {/* <NativeRouter>
        
//         {/* <Routes> */} 
//           <Pages1/>
//           <Pages2/>
//           {/* <Route path="/pages1" component={Pages1} /> */}
//         {/* </Routes>
//       </NativeRouter> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
