import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Menu = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Actions.comparator()}>
                <View >
                    <Text style={styles.text}>Comparador</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: Platform.OS == 'ios' ? 40 : 20,
        backgroundColor: '#F2F2F2',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold'
    }
})

export default Menu;
