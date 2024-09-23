import { Animated, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useCallback, useRef } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Button = ({ name, size, color, style, onPress }) => {

    const scale = useRef(new Animated.Value(1)).current;

    const animateScale = useCallback((newValue) => {
        Animated.spring(scale, {
            toValue: newValue,
            triction: 4,
            useNativeDriver: true
        }).start()

    }, [scale])

    return (
        <TouchableWithoutFeedback
            onPressIn={() => animateScale(0.6)}
            onPressOut={() => {
                animateScale(1)
            }}
            delayPressIn={0}
            delayPressOut={100}
        >
            <Animated.View style={{
                height: 60,
                width: 60,
                backgroundColor: "white",
                elevation: 5,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
                transform: [{ scale }],
                ...style
            }}>
                <FontAwesome name={name} size={size} color={color} />
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

export default Button

