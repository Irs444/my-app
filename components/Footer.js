import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'

const COLORS = {
    likes: "#00eda6",
    nope: "#ff006f",
    star: "#07A6FF"

}

const Footer = ({handleChoices}) => {
    return (
        <View style={styles.container}>
            <Button
                name="times"
                size={24}
                color={COLORS.nope}
                onPress={() => handleChoices(-1)}
            />
            <Button
                name="heart"
                size={24}
                color={COLORS.likes}
                onPress={() => handleChoices(1)}
            />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 15,
        width:240,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        zIndex: -999
    }
})