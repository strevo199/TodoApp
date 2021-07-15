import React from 'react'
import {Text, View,StyleSheet } from 'react-native'
import globalStyles from '../global'


const NavBar = () => {
    return (
        <View style ={globalStyles.navbar}>
            <Text style ={styles.navbarContent}>My Todo App</Text>
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    navbarContent:{
        color:'#ffffff',
        fontSize:30,
        letterSpacing: 2,
        fontWeight: '700'
    }
})
