import React, { useState } from 'react';
import {
    View, Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert,
    Platform
} from 'react-native';

import {
    venezuela,
    brasil,
    argentina,
    alemanha,
    belgica,
    italia
} from '../utils/ImageTypes';

import useResultsComporator from '../hooks/useResultsComparator';



const ComparatorScreen = () => {

    const [countryUm, setCountryUm] = useState('');
    const [countryDois, selectCountryDois] = useState('');

    const [showCountryUm, setShowCountryUm] = useState('');
    const [showCountryDois, setShowCountryDois] = useState('');

    const [searchResults] = useResultsComporator();

    const selectCountry = (country, wichList, pais) => {
        wichList == 'um' ? setCountryUm(country) : selectCountryDois(country);
        wichList == 'um' ? setShowCountryUm(pais) : setShowCountryDois(pais);
    }

    const compareCountrys = () => {
        countryUm && countryDois ?
            searchResults(countryUm, countryDois)
            :
            Alert.alert("Desculpe", "Será necessário selecionar dois países para realizar a comparação.");
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>Plataforma do COVID-19</Text>

            <View style={styles.containerCountrySelected}>
                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Selecione os países para que seja feita a comparação</Text>
                {countryUm || countryDois ? <Text>{showCountryUm}  --  {showCountryDois}</Text> : null}
            </View>

            <View style={{ flexDirection: 'row', flex: 1 }}>
                <ScrollView>
                    <View style={styles.containerImage}>
                        <TouchableOpacity onPress={() => selectCountry('brazil', 'um', 'Brasil')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryUm == 'brazil' ? 'black' : 'black',
                                borderWidth: countryUm == 'brazil' ? 5 : 0
                            }} source={brasil} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectCountry('italy', 'um', 'Itália')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryUm == 'italy' ? 'black' : 'black',
                                borderWidth: countryUm == 'italy' ? 5 : 0
                            }} source={italia} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectCountry('venezuela', 'um', 'Venezuela')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryUm == 'venezuela' ? 'black' : 'black',
                                borderWidth: countryUm == 'venezuela' ? 5 : 0
                            }} source={venezuela} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectCountry('argentina', 'um', 'Argentina')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryUm == 'argentina' ? 'black' : 'black',
                                borderWidth: countryUm == 'argentina' ? 5 : 0
                            }} source={argentina} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectCountry('belgium', 'um', 'Bélgica')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryUm == 'belgium' ? 'black' : 'black',
                                borderWidth: countryUm == 'belgium' ? 5 : 0
                            }} source={belgica} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectCountry('germany', 'um', 'Alemanha')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryUm == 'germany' ? 'black' : 'black',
                                borderWidth: countryUm == 'germany' ? 5 : 0
                            }} source={alemanha} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>


                <ScrollView>
                    <View style={styles.containerImage}>
                        <TouchableOpacity onPress={() => selectCountry('brazil', 'dois', 'Brasil')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryDois == 'brazil' ? 'black' : 'black',
                                borderWidth: countryDois == 'brazil' ? 5 : 0
                            }} source={brasil} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectCountry('italy', 'dois', 'Itália')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryDois == 'italy' ? 'black' : 'black',
                                borderWidth: countryDois == 'italy' ? 5 : 0
                            }} source={italia} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectCountry('venezuela', 'dois', 'Venezuela')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryDois == 'venezuela' ? 'black' : 'black',
                                borderWidth: countryDois == 'venezuela' ? 5 : 0
                            }} source={venezuela} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectCountry('argentina', 'dois', 'Argentina')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryDois == 'argentina' ? 'black' : 'black',
                                borderWidth: countryDois == 'argentina' ? 5 : 0
                            }} source={argentina} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectCountry('belgium', 'dois', 'Bélgica')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryDois == 'belgium' ? 'black' : 'black',
                                borderWidth: countryDois == 'belgium' ? 5 : 0
                            }} source={belgica} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectCountry('germany', 'dois', 'Alemanha')}>
                            <Image style={{
                                width: 150,
                                height: 100,
                                margin: 10,
                                borderColor: countryDois == 'germany' ? 'black' : 'black',
                                borderWidth: countryDois == 'germany' ? 5 : 0
                            }} source={alemanha} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <TouchableOpacity onPress={() => compareCountrys()}>
                <View style={styles.containerComparar}>
                    <Text>Comparar</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        alignSelf: 'center',
        margin: 10
    },
    containerImage: {
        alignItems: 'center',
    },
    containerCountrySelected: {
        padding: 20,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        borderWidth: 1
    },
    containerComparar: {
        padding: Platform.OS == 'ios' ? 40 : 20,
        backgroundColor: '#F2F2F2',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center'
    },
});

export default ComparatorScreen;