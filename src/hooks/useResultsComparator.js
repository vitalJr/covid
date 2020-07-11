import { useState, useEffect } from 'react';
import { Actions } from 'react-native-router-flux';
import covid from '../api/covid';


export default () => {

    const [results, setResults] = useState([]);

    const diaAtual = () => {
        let data = new Date()
        let dia = data.getDate().toString()
        let diaF = (dia.length == 1) ? '0' + dia : dia
        let mes = (data.getMonth() + 1).toString() //+1 pois no getMonth Janeiro começa com zero.
        let mesF = (mes.length == 1) ? '0' + mes : mes
        let anoF = data.getFullYear();
        return anoF + "-" + mesF + "-" + diaF;
    }

    const dataAnterior = () => {
        let data = new Date()
        let dia = data.getDate() - 1;
        dia = dia.toString();
        let diaF = (dia.length == 1) ? '0' + dia : dia;
        let mes = (data.getMonth() + 1).toString() //+1 pois no getMonth Janeiro começa com zero.
        let mesF = (mes.length == 1) ? '0' + mes : mes
        let anoF = data.getFullYear();
        return anoF + "-" + mesF + "-" + diaF;
    }

    const searchResults = async (countryUm, countryDois) => {
        const date = new Date();

        let result = [];

        const responseUm = await covid(`/country/${countryUm}/status/confirmed?from=${dataAnterior()}T00:00:00Z&to=${diaAtual()}T00:00:00Z`)
        const responseDois = await covid(`/country/${countryDois}/status/confirmed?from=${dataAnterior()}T00:00:00Z&to=${diaAtual()}T00:00:00Z`)

        for (let i = 0; i < responseUm.data.length; i++) {
            result.push(responseUm.data[i]);
        }

        for (let i = 0; i < responseDois.data.length; i++) {
            result.push(responseDois.data[i]);
        }

        Actions.chartcomparator({
            result: result,
        });

    }

    return [searchResults];
}