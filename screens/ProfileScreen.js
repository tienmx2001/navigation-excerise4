import React, { Component, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileScreen ({navigation, route}) {
  
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Đây là màn hình Profile",
            headerTitleAlign: 'center',
        })
      })

    return (
      <View style={{flex:1, justifyContent: 'center', alignContent: "center", alignItems: "center"}}>
        <Text> Đây là màn hình Profile </Text>
      </View>
    );
  

}