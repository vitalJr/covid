import { useState, useEffect } from 'react';
import { Actions } from 'react-native-router-flux';
import covid from '../api/covid';



export default () => {

    const [worldInformation, setWorldInformation] = useState([]);
    const [resultsWorld, setResultWorld] = useState([]);
    const [resultsCountry, setResultCountry] = useState([]);
    const teste = "";


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

    const searchByCountrys = async (country, pais, status) => {
        const date = new Date();
        let tipoStatus = '';
        const response = await covid(`/country/${country}/status/${status}?from=${primeiroDiaMes(date)}T00:00:00Z&to=${formatadorData(date)}T00:00:00Z`)
        console.log(response.data);
        setResultCountry(response.data);

        if (status == 'confirmed') {
            tipoStatus = 'Confirmados';
        } else if (status == 'recovered') {
            tipoStatus = 'Recuperados';
        } else {
            tipoStatus = 'Mortes';
        }

        Actions.chart({
            resultsCountry: response.data,
            resultsWorld: resultsWorld,
            status: tipoStatus,
            pais: pais
        });
    }

    const informationByCountry = async () => {
        const date = new Date();
        const response = await covid(`/world?from=${primeiroDiaMes(date)}T00:00:00Z&to=${formatadorData(date)}T00:00:00Z`);
        setWorldInformation(response.data);
    }

    useEffect(() => {
        informationByCountry();
    }, []);

    return [searchByCountrys, worldInformation];
}