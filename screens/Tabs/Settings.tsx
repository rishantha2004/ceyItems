import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import Color from '@/constanst/Color';

const Settings = () => {
  const headerHeight = useHeaderHeight();
  const [username, setUserName] = useState<string>('Priya Kumar');
  const [password, setPassword] = useState<string>('');
  
  
  const handlePress = () => {
    Alert.alert('Button Pressed', 'You pressed the button!');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: Color.background }}>
        <View style={{
          width: '100%',
          backgroundColor: Color.primaryColor,
          paddingTop: headerHeight,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{
              borderRadius: 100,
              backgroundColor: Color.white,
              width: 200,
              height: 200,
              borderWidth: 3,
              borderColor: Color.secondaryColor,
              overflow: 'hidden'
            }}>
              <Image
                source={require('../../assets/images/profile1.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
        <Text style={{
          fontSize: 24,
          marginTop: 20,
          color: Color.black,
          fontWeight: '800',
        }}>
          {username}
        </Text>
        <Text style={{
          fontSize: 18,
          color: Color.black,
        }}>
          User
        </Text>
        <View style={{ marginHorizontal: 20, marginTop: 50, width: '90%' }}>
          <Text style={{ fontSize: 20 }}>Change Name</Text>
          <TextInput
            placeholder='Username'
            value={username}
            onChangeText={(text: string) => setUserName(text)}
            style={{
              height: 40,
              borderColor: '#ccc',
              borderWidth: 1,
              marginBottom: 8,
              paddingHorizontal: 8,
              borderRadius: 10,
              marginVertical: 20,
              width: '100%',
            }}
          />

          <Text style={{ fontSize: 20 }}>Change Password</Text>
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            style={{
              height: 40,
              borderColor: '#ccc',
              borderWidth: 1,
              marginBottom: 8,
              paddingHorizontal: 8,
              borderRadius: 10,
              marginVertical: 20,
              width: '100%',
            }}
          />
        </View>
        <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: Color.primaryColor,
          paddingVertical: 10, 
          paddingHorizontal: 20, 
          borderRadius: 5, 
          marginTop: 20, 
        }}
      >
        <Text
          style={{
            color: '#fff', 
            fontSize: 16, 
            fontWeight: 'bold', 
          }}
        >
          Press Me
        </Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Settings;
