import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const COLORS = {
    likes: "#008000",
    nope: "#ff006f"
}

const Choice = ({ type }) => {
    const color = COLORS[type]
    return (
        <View style={{
            borderRadius: 10,
            borderColor: color,
            borderWidth: 5,
            paddingHorizontal: 15
        }}>
            <Text style={{
                fontWeight: "bold",
                fontSize: 20,
                textTransform:"uppercase",
                color: color
            }}>{type}</Text>
        </View>
    )
}

export default Choice

