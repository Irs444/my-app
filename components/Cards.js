import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient"


const Cards = ({ name, age, distance, location, image }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <LinearGradient colors={["transparent", "rgba(0,0,0,.9)"]} style={styles.gradient}>
                <View style={styles.userContainer}>
                    <Text style={styles.name}>{name}, {age}</Text>
                    <Text style={styles.location}>Live in{location}</Text>
                    <Text style={styles.distance}>{distance} miles away</Text>
                </View>
            </LinearGradient>
            <Text>Cards</Text>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({})