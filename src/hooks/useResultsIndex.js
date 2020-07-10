import { useState, useEffect } from 'react';
import { Actions } from 'react-native-router-flux';
import covid from '../api/covid';



export default () => {
    const [resultsWorld, setResultWorld] = useState([]);
    const [resultsCountry, setResultCountry] = useState([]);


    const formatadorData = (data) => {
        data = new Date(data)
        let dia = data.getDate().toString()
        let diaF = (dia.length == 1) ? '0' + dia : dia
        let mes = (data.getMonth() + 1).toString() //+1 pois no getMonth Janeiro começa com zero.
        let mesF = (mes.length == 1) ? '0' + mes : mes
        let anoF = data.getFullYear();
        return anoF + "-" + mesF + "-" + diaF;
    }

    const primeiroDiaMes = (data) => {
        data = new Date(data)
        let dia = data.getDate().toString()
        let diaF = '01';
        let mes = (data.getMonth() + 1).toString() //+1 pois no getMonth Janeiro começa com zero.
        let mesF = (mes.length == 1) ? '0' + mes : mes
        let anoF = data.getFullYear();
        return anoF + "-" + mesF + "-" + diaF;
    }

    const searchByCountrys = async (country, pais) => {
        const date = new Date();
        const response = await covid(`/country/${country}/status/confirmed?from=${primeiroDiaMes(date)}T00:00:00Z&to=${formatadorData(date)}T00:00:00Z`)
        setResultCountry(response.data);
        Actions.chart({
            resultsCountry: response.data,
            resultsWorld: resultsWorld,
            pais: pais
        });
    }

    const statusCovidWorld = () => {
        covid.get(`/stats`).then((values) => {
            setResultWorld(values.data);
        })
    }

    useEffect(() => {
        statusCovidWorld();
    }, []);

    return [searchByCountrys];
}