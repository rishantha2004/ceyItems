import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View, Text, Dimensions, Pressable, Alert } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigationProp } from '@react-navigation/stack';

interface PageProps {
    title: React.ReactNode;
    index: number;
    translateX: Animated.SharedValue<number>;
}

const Page: React.FC<PageProps> = ({ title, index, translateX }) => {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window');
    const size = width * 0.7;

    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

    const rTextStyle = useAnimatedStyle(() => {
        const translateY = interpolate(translateX.value, inputRange, [height / 2, 0, -height / 2]);
        const opacity = interpolate(translateX.value, inputRange, [0, 1, 0]);
        return {
            opacity,
            transform: [{ translateY }],
        };
    });

    const rStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            translateX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0, 1, 0],
            Extrapolation.CLAMP
        );

        const borderRadius = interpolate(
            translateX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0, size / 2, 0],
            Extrapolation.CLAMP
        );
        return {
            borderRadius,
            transform: [{ scale }],
        };
    });
    
    return (
        <View>
            {index === 2 ? (
                    <View style={{ width, height, backgroundColor: `rgba(255, 0, 0, 0.${(index + 5)})`, justifyContent: 'center', alignItems: 'center' }}>
                    <Animated.View style={[{ width: size, height: size, backgroundColor: 'rgba(255, 0, 0, 0.8)' }, rStyle]} />
                    <Animated.View style={[{ position: 'absolute' }, rTextStyle]}>
                        <View style={{ alignItems: 'center', gap: 16}}>
                            <Text style={{ fontSize: 50, fontWeight: 800, color: 'white'}}>{title}</Text>
                            <Pressable style={{ width: 50, height: 50, backgroundColor: 'white', borderRadius: 100, alignItems: 'center',
                                paddingTop: 10
                            }} onPress={() => navigation.navigate('Login')}>
                                <Icon name="arrow-forward" size={30} color="#000" />
                            </Pressable> 
                        </View>
                    </Animated.View>
                    </View>
            ): (
                <View style={{ width, height, backgroundColor: `rgba(255, 0, 0, 0.${(index + 5)})`, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[{ width: size, height: size, backgroundColor: 'rgba(255, 0, 0, 0.8)' }, rStyle]} />
            <Animated.View style={[{ position: 'absolute' }, rTextStyle]}>
                <View style={{ alignItems: 'center', gap: 16}}>
                    <Text style={{ fontSize: 50, fontWeight: 800, color: 'white'}}>{title}</Text>
                    <View style={{ width: 50, height: 50, backgroundColor: 'white', borderRadius: 100, alignItems: 'center',
                        paddingTop: 10
                    }}>
                        <Icon name="arrow-forward" size={30} color="#000" />
                    </View> 
                </View>
            </Animated.View>
        </View>

            )}
           
        </View>
      
    );
};

export default Page;
