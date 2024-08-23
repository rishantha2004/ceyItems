import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import Page from '../components/Page';


const LoginScreen = () => {
    const WordsArray = ["Welcome", "CeyItems", "Login"];
    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    });

    return (
        <Animated.ScrollView
            pagingEnabled
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            horizontal
            style={styles.scrollView}
        >
            {WordsArray.map((item, index) => (
                <Page
                    title={item} 
                    key={index.toString()}
                    index={index}
                    translateX={translateX}
                />
            ))}
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#fff',
    },
});

export default LoginScreen;
