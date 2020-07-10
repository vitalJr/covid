import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GlobalDates = (props) => {

    const allUpdated = props.dadosGlobais.AllUpdated;
    const total = props.dadosGlobais.Total;
    const dayOneTotal = props.dadosGlobais.DayOneTotal;

    const dataFormatada = (data) => {
        let date = data.substring(0, 10);
        date = date.split("-");
        date = date[2] + "/" + date[1] + "/" + date[0];
        return date;
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.titleGlobal}>Estatisticais Globais - atualizado em : {dataFormatada(allUpdated)}</Text>
            <View style={styles.container}>
                <Text style={styles.description}>Total de casos: {total}</Text>
                <Text style={styles.description}>Atualização 1º dia: {dayOneTotal}</Text>
                {/* <Text style={styles.description}>teste</Text> */}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#251821'
    },
    titleGlobal: {
        fontWeight: 'bold',
        fontSize: 13,
        alignSelf: 'center'
    },
    description:{
        color:'#F2F2F2'
    }
})

export default GlobalDates;