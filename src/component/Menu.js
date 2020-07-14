import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Menu = () => {
    return (
        <View style={styles.containerMenu}>
            <TouchableOpacity onPress={() => Actions.comparator()}>
                <View style={styles.container}>
                    <Text style={styles.text}>Comparador</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.casosdiarios()}>
                <View style={styles.container}>
                    <Text style={styles.text}>Casos Mundiais</Text>
                </View>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => Alert.alert('Nova Tela', 'Colocar nova tela')}>
                <View style={styles.container}>
                    <Text style={styles.text}>Comparador</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: Platform.OS == 'ios' ? 40 : 20,
        backgroundColor: '#F2F2F2',
        borderColor: 'black',
        // borderTopWidth: 1,
        alignItems: 'center'
    },
    button: {
        marginHorizontal: 10
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    containerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F2F2F2',
        paddingHorizontal:15,
        borderTopWidth:1
    }
})

export default Menu;
