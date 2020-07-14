import React, { useState } from 'react';
import {
    View, Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Picker,
    Alert,
    Platform
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    venezuela,
    brasil,
    argentina,
    alemanha,
    belgica,
    italia,
    marrocos
} from '../utils/ImageTypes';


import useResultsIndex from '../hooks/useResultsIndex';
import Menu from '../component/Menu';


const IndexScreen = ({ navigation }) => {

    const [searchByCountrys] = useResultsIndex();
    const [status, setStatus] = useState('');

    const _searchByCountrys = (country, pais, status) => {
        status ? searchByCountrys(country, pais, status) :
            Alert.alert('Desculpe', 'Selecione um status antes de continuar.');
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>Plataforma do COVID-19</Text>
            <Text style={styles.subtitle}>Selecione um status para que seja gerado o gráfico</Text>

            <View style={{
                borderColor: Platform.OS == 'android' ? 'black' : '',
                borderWidth: Platform.OS == 'android' ? 1 : 0,
                margin: 5,
            }}>
                <Picker
                    selectedValue={status}
                    style={{
                        height: 50,
                        width: 250,
                        alignSelf: 'center',
                        marginTop: Platform.OS == 'ios' ? -80 : 0
                    }}
                    onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
                >
                    <Picker.Item label="Status" value="" />
                    <Picker.Item label="Confirmados" value="confirmed" />
                    <Picker.Item label="Recuperados" value="recovered" />
                    <Picker.Item label="Mortes" value="deaths" />
                </Picker>
            </View>

            <ScrollView style={{ marginTop: Platform.OS == 'ios' ? 40 : 0 }}>
                <View style={styles.containerImage}>

                    <TouchableOpacity onPress={() => _searchByCountrys('brazil', 'Brasil', status)}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={brasil} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => _searchByCountrys('italy', 'itália', status)}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={italia} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => _searchByCountrys('venezuela', 'Venezuela', status)}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={venezuela} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => _searchByCountrys('argentina', 'Argentina', status)}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={argentina} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => _searchByCountrys('belgium', 'Belgica', status)}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={belgica} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => _searchByCountrys('germany', 'Alemanha', status)}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={alemanha} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => _searchByCountrys('morocco', 'Marrocos', status)}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={marrocos} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Menu />

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        alignSelf: 'center',
        margin: 10
    },
    subtitle: {
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    containerImage: {
        alignItems: 'center',
    },
    pickerStyle: {
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        width: 250,
        alignSelf: 'center'
    }
});

export default IndexScreen;