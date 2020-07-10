import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';


import useResultsIndex from '../hooks/useResultsIndex';

const brasil = require("../img/brasil.jpg");
const italia = require("../img/italia.jpg");
const venezuela = require("../img/venezuela.jpg");
const argentina = require("../img/argentina.jpg");
const belgica = require("../img/belgica.jpg");
const alemanha = require("../img/alemanha.jpg");

const IndexScreen = ({ navigation }) => {

    const [searchByCountrys] = useResultsIndex();

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>Plataforma do COVID-19</Text>

            <ScrollView>
                <View style={styles.containerImage}>

                    <TouchableOpacity onPress={() => searchByCountrys('brazil','Brasil')}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={brasil} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => searchByCountrys('italy','itália')}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={italia} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => searchByCountrys('venezuela','Venezuela')}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={venezuela} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => searchByCountrys('argentina','Argentina')}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={argentina} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => searchByCountrys('belgium','Belgica')}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={belgica} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => searchByCountrys('germany','Alemanha')}>
                        <Image style={{ width: 200, height: 150, margin: 10 }} source={alemanha} />
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>

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
    }
});

export default IndexScreen;