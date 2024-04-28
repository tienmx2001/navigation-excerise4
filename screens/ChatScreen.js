import React, { Component, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ChatScreen ({navigation, route}) {
  
    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitleAlign: 'center',
          headerLeft: (() => {
            return (
              <MaterialCommunityIcons 
                style={{marginLeft: 10}} 
                name="arrow-left" 
                size={25} 
                onPress={() => {
                  navigation.goBack();
                }}
              />
    
            );
          })
    
        })
      })

    return (
      <View style={{flex:1, justifyContent: 'center', alignContent: "center", alignItems: "center"}}>
        <Text> Đây là màn hình CHAT </Text>
        <TouchableOpacity>
          <Button 
            title="Trở về màn hình hiện hành" 
            onPress={() => {
              navigation.goBack()
            }}
          />
          <Button 
            title="Trở về màn hình HOME" 
            onPress={() => {
              navigation.navigate("Home")
            }}
          />
      </TouchableOpacity>
      </View>
    );
  

}