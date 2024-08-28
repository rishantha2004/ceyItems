import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, ScrollViewBase } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';
import Color from '@/constanst/Color';

const Admin = () => {
  const headerHeight = useHeaderHeight();
  const [value, setValue] = useState<any>();
  const imgUrl = "../assets/images/profile1.png";
  const [isAdmin, setIsAdmin] = useState("No Admin");
  const [userData, setUserData] = useState<any>();

  
  useEffect(() => {
    const fetchData =  async () => {
        const response = await fetch('http://192.168.54.64:8000/api/v1/user/get');
        const data = await response.json();
        const user = data.data.value.map((list: any) => ({
            id: list._id,
            name: list.username,
            isAdmin: list.isAdmin
        }))
        const Admin = data.data.value.map((list: any) => ({
          id: list._id,
          isAdmin: list.isAdmin
      }))
      let admin = Admin.forEach((element : any) => element.isAdmin)
      if(admin) {
        setIsAdmin("Admin")
      } else {
        setIsAdmin("User")
      }
      setValue(user)
        
    
       
    }
    fetchData()
}, [])


  return (
   <ScrollView style={{flex: 1, paddingTop: headerHeight, marginLeft: 10, backgroundColor: Color.bigColor, paddingHorizontal: 16,}}>
    
    <Text style={{fontSize: 28, fontWeight: 800, Color: Color.black, marginTop: 10,}}>Explore the Beautiful World!</Text>

    <View style={{flexDirection: 'row', marginVertical: 10, gap: 20}}>
      <View style={{flex: 1, padding: 16, flexDirection: 'row', borderRadius: 10, backgroundColor: Color.white }}>
        <Ionicons name="search" size={28} style={{marginRight: 5}} />
        <TextInput placeholder='Search places...'  color={Color.black}/>
      </View>
      <TouchableOpacity onPress={() => {}} style={{justifyContent: 'center', backgroundColor: Color.primaryColor, padding: 10, borderRadius: 10,}}>
        <Ionicons name="options" size={28}/>
      </TouchableOpacity>
    </View>
    <View style={{marginVertical: 20}}>
      <Text style={{fontSize: 35, fontWeight: 1000}}>
        Users
      </Text>
   
    </View>

    <View style={{ marginVertical: 0}}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={value}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              borderWidth: 1,
              marginBottom: 20, 
            }}
          >
            <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 10 }}>
              
            </View>
            <View style={{ flex: 2, marginRight: 16, paddingVertical: 20 }}>
              <Text style={{fontSize: 20, fontWeight: 800}}>{item.name}</Text>
              
              <Text style={{fontSize: 20, fontWeight: 800}}>{isAdmin}</Text>

        
            </View>
          </View>
        )}
        
      />
      </View>
   </ScrollView>
  )
}

export default Admin;