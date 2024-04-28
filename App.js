import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DetailsScreen from "./screens/DetailsScreen"
import HomeScreen from "./screens/HomeScreen"
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




function MyChat() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyChat"
        initialRouteName="MyChat"
        component={ChatScreen}
      />
    </Stack.Navigator>
  );
}



function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        initialRouteName="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        initialParams={{
          stringTitle: "Màn hình HOME"
        }}
      />

      <Tab.Screen
        name="Details"
        initialRouteName="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-details-outline" color={color} size={size} />
          ),
        }}
        initialParams={{
          stringTitle: "Màn hình Details",
          username: "Tham số Username mặc định"
        }}
      />


    </Tab.Navigator>
  );
}



function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyHome-Stack"
        initialRouteName="MyHome"
        component={MyTab}
        initialParams={{
          stringTitle: "Màn hình HOME"
        }}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Profile"
        initialRouteName="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}






function MyDrawer() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Drawer.Navigator>

          <Drawer.Screen
            name="My Home"
            initialRouteName="MyHome"
            component={MyStack}
            options={{
              tabBarLabel: 'My Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
              headerShown: false,
            }}
            initialParams={{
              stringTitle: "Màn hình HOME"
            }}
          />

          <Drawer.Screen
            name="Chat"
            component={MyChat}
            options={{
              tabBarLabel: 'Chat',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chat" color={color} size={size} />
              ),
              headerShown: false,
            }}
          
          />


        </Drawer.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
export default MyDrawer;