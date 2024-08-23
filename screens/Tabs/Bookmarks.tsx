import { View, Text, Image, Button, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Color from '@/constanst/Color';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Bookmarks = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { title, desc, category, rating, price, image } = route.params;
    const handleAdd = () => {
        Alert.alert('Added to bookmark!') 
        navigation.navigate("Home") 
    }

  return (
    <View>
        {route ? (
                <View style={{ padding: 30}}>
                <Image
                    source={{ uri: image }}
                    style={{ width: '100%', height: '60%', borderRadius: 10}}
                />
                <View style={{ margin: 10, gap: 20}}>
                    <Text style={{ fontSize: 30, color: Color.primaryColor, fontWeight: 800}}>{title}</Text>
                    <Text style={{fontSize: 20, fontWeight: 500}}>Category:  {category}</Text>
                    <Text>{desc}</Text>
                    <View style={{ flexDirection: 'row', gap: 120}}>
                        <Text style={{ color: Color.primaryColor, fontWeight: 800, fontSize: 16}}>
                            Rating: {rating}</Text>
                        <Text style={{ color: Color.primaryColor, fontWeight: 800, fontSize: 16}}>Price: ${price}</Text>
                    </View>
                    <TouchableOpacity
                onPress={handleAdd}
                style={{
                    backgroundColor: Color.primaryColor, 
                    borderRadius: 10,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: 'white', fontSize: 16 }}>Add me</Text>
            </TouchableOpacity>
                </View>
            </View>
        ): (
            <View>
                <Text>No Bookmark add</Text>
            </View>
        )}
    </View>
    
  )
}

export default Bookmarks