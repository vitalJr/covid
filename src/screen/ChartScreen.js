import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Platform } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'

import GlobalDates from '../component/GlobalDates';
import useResultsIndex from '../hooks/useResultsIndex';

const ChartScreen = (props) => {

    const resultsCountry = props.navigation.state.params.resultsCountry;
    const resultsWorld = props.navigation.state.params.resultsWorld;
    const paisSelecionado = props.navigation.state.params.pais;

    const date = new Date();
    const retornaMes = (data) => {
        data = new Date(data)
        let mes = (data.getMonth() + 1).toString() //+1 pois no getMonth Janeiro começa com zero.
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

    const data = resultsCountry.map(casos => casos.Cases);
    const line = {
        // labels: ['teste 1','teste 2','teste 3','teste 4','teste 5'],
        datasets: [
            {
                data: data,
                strokeWidth: 2, // optional
            },
        ],
    };


    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.titleMes}>{retornaMes(date)}</Text>
            <Text style={styles.titlePais}>{paisSelecionado}</Text>
            <Text style={styles.description}>Este gráfico representa a curva viral no mês atual</Text>

            <ScrollView>
                <BarChart
                    data={line}
                    width={Dimensions.get('window').width} // from react-native
                    height={ Platform.OS == 'ios' ? Dimensions.get('window').height : 480}
                    chartConfig={{
                        backgroundColor: '#f90000',
                        backgroundGradientFrom: '#f90000',
                        backgroundGradientTo: '#f90000',
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 5
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />

                {/* <GlobalDates dadosGlobais={resultsWorld} /> */}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    titleMes: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        margin: 10
    },
    titlePais: {
        fontWeight: 'bold',
        fontSize: 15,
        margin: 5,
        alignSelf: 'center',
    },
    description: {
        fontSize: 15,
        // fontWeight:'bold',
        fontStyle: 'italic',
        alignSelf: 'center'
    }
});

export default ChartScreen;