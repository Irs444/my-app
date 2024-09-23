import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient"

const {width, height} = Dimensions.get("screen")


const Cards = ({ name, age, distance, location, image , isFirst}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <LinearGradient colors={["transparent", "rgba(0,0,0,.3)"]} style={styles.gradient}>
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

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        top:25

    },
    image:{
        width:width * 0.9,
        height:height * 0.78,
        borderRadius:20

    },
    gradient:{
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        height:200,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20
        
    },
    userContainer:{
        position:"absolute",
        bottom:24,
        left:24

    },
    name:{
        fontSize:30,
        color:"white",
        fontWeight:"400",

    },
    location:{
        fontSize:18,
        color:"white",
        fontWeight:"300"

    },
    distance:{
        fontSize:18,
        color:"white",
        fontWeight:"300"

    }
})