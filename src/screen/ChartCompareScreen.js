import React from 'react';
import {
    View, Text,
    StyleSheet,
    Dimensions,
    Platform,
    ScrollView
} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'


const ChartCompareScreen = (props) => {

    const result = props.navigation.state.params.result;
    const status = props.navigation.state.params.status;
    const data = result.map(casos => casos.Cases);
    const labels = result.map(casos => casos.Country);

    const line = {
        labels: labels,
        datasets: [
            {
                data: data,
                strokeWidth: 2, // optional
            },
        ],
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.textDexcription}>Gráfico mostra a compração dos casos para os países selecionados na seção anterior.</Text>
            <Text style={styles.textTopics}> - Comparação realizada com a data de ontem até a presente data. Comparação baseada no status {status} dos países selecionados. </Text>
            <ScrollView>
                <BarChart
                    data={line}
                    width={Dimensions.get('window').width} // from react-native
                    height={Platform.OS == 'ios' ? Dimensions.get('window').height : 480}
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
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textDexcription: {
        marginHorizontal: 10,
        marginTop: 5
    },
    textTopics: {
        marginHorizontal: 10,
        marginTop: 5,
        fontWeight: 'bold'
    },
})

export default ChartCompareScreen;