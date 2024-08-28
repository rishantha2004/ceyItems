import { View, Text, FlatList, ScrollView, TouchableOpacity, Image, Button, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '@/constanst/Color';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
    const [value, setValue] = useState<any>();
    const navigation = useNavigation()

    useEffect(() => {
        const fetchData =  async () => {
            const response = await fetch('http://192.168.54.64:8000/api/v1/category/get');
            const data = await response.json();
            const category = data.data.category.map((list: any) => ({
                id: list._id,
                name: list.name,
            }))
            setValue(category)
           
        }
        fetchData()
    }, [])

    console.log("Cateory name", value)
  return (
    <View>
        <FlatList
            keyExtractor={(item) => item.id}
            data={value}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <View style={{backgroundColor: Color.primaryColor, 
                borderRadius: 10, margin: 10, width: 80, alignItems: 'center',
                paddingTop: 10
                }}>
                    <Pressable style={{paddingHorizontal: 5}}>
                        <Text style={{ color: Color.white, alignItems: 'center'}}>{item.name}</Text>
                    </Pressable>
                </View>
            )}
        />
        {/* <FlatList
            keyExtractor={(item) => item._id.toString()}
            data={value}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={{   marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    shadowColor: '#333',
                    shadowOffset: { width: 1, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                    margin: 20,
                    width: 300, // Fixed width for consistent card size
                    height: 370,
                    gap: 6 // Fixed height to match width
                }}>
                    <Text style={{ color: Color.primaryColor, fontSize: 20, fontWeight: 800}}>{item.title}</Text>
                    <Image
                        source={{ uri: item.image }}
                        style={{width: '100%', height:  150, borderRadius: 10, marginVertical: 10}}
                    />
                
                    <Text style=
                    {{ color: Color.primaryColor, padding: 10, borderRadius: 10, alignItems: 'center'}}>
                        {item.title}
                        </Text>
                    <Text>{item.brand}</Text>
                    <View style={{flexDirection: 'row', gap: 100}}>
                        <Text style={{}}>
                           Rating: {item.oldPrice}
                        </Text>
                        <Text>Price: {item.price}</Text>
                      
                    </View>
                    <TouchableOpacity
                           style={{
                            backgroundColor: Color.primaryColor,
                            borderRadius: 10,
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            alignItems: 'center',
                        }}
                            onPress={() => navigation.navigate("Bookmark", {
                                title: item.title,
                                desc: item.des,
                                category: item.category,
                                rating: item.brand,
                                price: item.price,
                                image: item.image,
                            })}
                    >
                        <Text style={{ color: 'white', fontSize: 16 }}>Add me</Text>
                    </TouchableOpacity>
                    </View>
            
            )}
        /> */}
    </View>

  )
}

export default Category