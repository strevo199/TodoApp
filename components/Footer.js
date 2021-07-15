import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
    return (
        <View style ={styles.footer}>
            <Text style ={styles.footerContent}>Stephen Mgbeojikwe @ 2021</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer:{
        backgroundColor:'#020527',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerContent:{
        fontWeight: 'bold',
        color: 'white'
    }
})
