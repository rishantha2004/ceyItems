import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Notification from '@/screens/Notification';

const Notifications = () => {

    const [value, setValue] = useState<any>();
    const imgUrl = '../assets/images/profile1.png'

    useEffect(() => {
        const fetchData =  async () => {
            const response = await fetch('https://fakestoreapiserver.reactbd.com/walmart');
            const data = await response.json();
            setValue(data)
        }
        fetchData()
    }, [])
  return (
     <View>
        <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={value}
            renderItem={({item}) => (
                <Notification
                    email={item.title}
                    name={item.brand}
                    imgUrl={imgUrl}
                />
            )}
        />
     </View>
  )
}

export default Notifications