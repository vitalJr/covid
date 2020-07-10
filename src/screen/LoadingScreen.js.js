import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const loading = require("../img/loading.gif");

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textLoading}>Carreando informações e gerando seu gráfico...</Text>
            <Image source={loading} style={{ height: 300, width: 300 }} />
            <Text style={styles.textLoadingInformativo}>
                A plataforma tem o intuito de te informar quanto ao avanço do covid-19 no país selecionado</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191f26',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLoading: {
        color: '#F2F2F2',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textLoadingInformativo: {
        color: '#F2F2F2',
        fontSize: 12,
        alignSelf:'center',
        fontWeight: 'bold',
        marginHorizontal:10
    }
})

export default LoadingScreen;