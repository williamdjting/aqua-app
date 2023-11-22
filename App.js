import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Pages1 from "./src/pages/Pages-1.js";
import Pages2 from "./src/pages/Pages-2.js";
import Pages3 from "./src/pages/Pages-3.js";
import { NativeRouter, Route, Routes } from "react-router-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';




// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Pages1} />
        <Stack.Screen name="Data" component={Pages2} /> 
      </Stack.Navigator> */}
       {/* <Tab.Navigator> */}
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Data') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            else if (route.name === 'Export') {
              iconName = focused ? 'ios-cloud-upload' : 'ios-cloud-upload-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2596be',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Pages1} />
        <Tab.Screen name="Data" component={Pages2} options={{ title: 'Historical Data'}}/>
        <Tab.Screen name="Export" component={Pages3} options={{ title: 'Export Data' }}/>
      </Tab.Navigator>
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
