import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [value, setValue] = useState<any>();
  const imgUrl = "../assets/images/profile1.png";

  
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

  return (
    <View style={{}}>
      <Text style={{ alignItems: 'center', marginHorizontal: 80, marginVertical: 50,
        fontSize: 40, fontWeight: 800
      }}>Categories</Text>
    <View style={{ marginVertical: 0}}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
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
              <Image
                source={require("../../assets/images/profile1.png")}
                style={{ width:  50, height: 50, borderRadius: 100, padding: 10 }}
              />
            </View>
            <View style={{ flex: 2, marginRight: 16, paddingVertical: 20 }}>
              <Text style={{fontSize: 20, fontWeight: 800}}>{item.name}</Text>
            </View>
          </View>
        )}
        
      />
      </View>
    </View>
  );
};

export default Category;
