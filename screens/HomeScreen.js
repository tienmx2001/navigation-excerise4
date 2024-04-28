import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useLayoutEffect } from 'react';
import { Menu, PaperProvider, Divider, Appbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function HomeScreen({navigation, route}) {

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);


  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.stringTitle,
      headerTitleAlign: 'center',
      headerRight: (() => {
        return (
            <View style={{flex: 1,}}>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                  <Appbar.Action icon="dots-vertical" onPress={openMenu}/>
                }>
                <Menu.Item 
                  onPress={() => {
                    navigation.navigate('Details')
                    closeMenu()
                  }} 
                  title="Details" />
                <Divider />
                <Menu.Item 
                  onPress={() => {
                      alert("Đây là Item Test")
                      closeMenu()
                  }} 
                  
                  title="Item test" />
              </Menu>
            </View>
        );
      }),
      headerLeft: (() => {
        return (
          <MaterialCommunityIcons 
            style={{marginLeft: 15}} 
            name="menu" 
            size={30} 
            onPress={() => {
              navigation.openDrawer();
            }}
          />

        );
      })

    })
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Đây là màn hình HOME </Text>
      <Text> {route.params?.stringTitle} </Text>
      <TouchableOpacity>
          <Button 
            title="Đi đến 1 màn hình khác" 
            onPress={() => {
              navigation.navigate("Profile")
            }}
          />
      </TouchableOpacity>
    </View>
  );
}