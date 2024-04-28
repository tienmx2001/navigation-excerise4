import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { useLayoutEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DetailsScreen({route, navigation}) {
    const { username } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: username,
            headerTitleAlign: 'center',
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
        <Text style={{color: 'red', fontSize: 14}}> {username} - Đây là Text được gửi từ HomeScreen. </Text>
        <Button title="Cập nhật tên mới" onPress={() => {
            navigation.setParams({
                username: "Thử set params"
            })
        }} />
        <Button title="Trở về màn hình HOME" onPress={() => {
            navigation.navigate("Home", {stringTitle: "Details trả về HOME"});
        }}/>
      </View>
    );
  }