import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import useResultsIndex from '../hooks/useResultsIndex';


const NewCases = () => {

    const [search, worldInformation] = useResultsIndex();
    let contador = 0;

    const mesAtual = () => {
        const data = new Date();
        let mes = (data.getMonth() + 1).toString();
        let mesF = (mes.length == 1) ? '0' + mes : mes
        switch (mesF) {
            case '01':
                return "Janeiro"
                break;
            case '02':
                return "Fevereiro"
                break;
            case '03':
                return "Março"
                break;
            case '04':
                return "Abril"
                break;
            case '05':
                return "Maio"
                break;
            case '06':
                return "Junho"
                break;
            case '07':
                return "Julho"
                break;
            case '08':
                return "Agosto"
                break;
            case '09':
                return "Setembro"
                break;
            case '10':
                return "Outubro"
                break;
            case '11':
                return "Novembro"
                break;
            case '12':
                return "Dezembro"
                break;
        };
    }


    return (
        <View style={{ margin: 10, flex: 1 }}>
            <Text style={styles.textDescription}>Nesta seção está sendo mostrado a quantidade de casos confirmados, mortes, casos recuperados,
                    como também número total de casos confirmados, mortes e recuperações até o dia atual.</Text>
            <Text> * Estes números são contabilizados desde o primeiro dia do mês atual.</Text>

            <ScrollView>
                {worldInformation.map((world) => {
                    contador += 1;
                    return (
                        <View style={styles.container}>
                            <Text style={styles.titleText}>{contador}º dia de {mesAtual()}</Text>
                            <Text>Casos Confirmados: {world.NewConfirmed}</Text>
                            <Text>Mortes: {world.NewDeaths}</Text>
                            <Text>Recuperados: {world.NewRecovered}</Text>
                            <Text>Total Confirmados: {world.TotalConfirmed}</Text>
                            <Text style={{ color: 'red', fontWeight: 'bold' }}>Total Mortes: {world.TotalDeaths}</Text>
                            <Text style={{ color: 'blue', fontWeight: 'bold' }}>Total Recuperados: {world.TotalRecovered}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textDescription: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    container: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        margin: 5,
        borderTopWidth: 1,
        elevation: 10
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 3
    }
});

export default NewCases;