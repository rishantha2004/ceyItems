import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';
import Color from '@/constanst/Color';
import Category from '@/components/Category';

const Home = () => {
  const headerHeight = useHeaderHeight();
  return (
   <View style={{flex: 1, paddingTop: headerHeight, marginLeft: 10, backgroundColor: Color.bigColor, paddingHorizontal: 16,}}>
    
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
        Categories
      </Text>
      <Category />
    </View>
   </View>
  )
}

export default Home;