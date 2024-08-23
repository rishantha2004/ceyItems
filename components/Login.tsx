import { View, Text, Image, TextInput, Button, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
  const navigation = useNavigation()
  const usersData: { id: number, username: string, password: string}[] = [
    {
      id: 1, 
      username: 'user1',
      password: 'user01'
    },
    {
      id: 2, 
      username: 'user2',
      password: 'user02'
    },
    {
      id: 3, 
      username: 'user2',
      password: 'user03'
    },
  ]
  type ErrorState = string | null;

  const [isnotLogin, setIsNotLogin] = useState(true);
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<ErrorState>(null);

  const handleLogin = () => {
    const user = usersData.find(
      (element) => element.username.toLowerCase() === username.toLowerCase() && 
      element.password.toLowerCase() === password.toLowerCase()
    );
  console.log(user)
  console.log(username, password)
  if (user) {
    navigation.navigate('Tabs')
    setError(null)
    setIsNotLogin(false)
  } else {
    setIsNotLogin(true)
    setError('Invaild Username or Password!')
  }
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'red', height: '100%' }}>
      <View style={{ marginVertical: 80, gap: 16, alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/images/profile1.png')}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
        </View>
        <View style={{ width: '80%', height: '60%', backgroundColor: 'white', borderRadius: 20, alignItems: 'center',
          paddingTop: 20, gap: 20
        }}>
          <Text style={{
            fontSize: 30, fontWeight: 800
          }}>Login</Text>
          <TextInput
            placeholder='Username'
            value={username}
            onChangeText={(text: string) => setUsername(text)}
            style={{marginTop: 20, borderWidth: 1, width: '80%', height: 40, marginHorizontal: 30}}
          />
           <TextInput
            placeholder='Password'
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            style={{marginTop: 20, borderWidth: 1, width: '80%', height: 40, marginHorizontal: 30}}
          />
             {isnotLogin ? (
              <Text style={{ color: 'red'}}>{error}</Text>
            ): (
              <Text></Text>
            )}
          <View style={{ width: '80%', height: '70%', gap: 10 }}>
            <Button title = 'Login' color='red' onPress={handleLogin} />
            <View style={{ gap: 1}}>
            <Pressable onPress={() => Alert.alert('Password Changed!')}>
             <Text style={{ color: 'blue'}}>Forget password?</Text>
            </Pressable>
          </View>
          </View> 
        </View>
      </View>
    </View>
  )
}

export default Login