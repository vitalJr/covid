import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import IndexScreen from './src/screen/IndexScreen';
import ChartScreen from './src/screen/ChartScreen';
import LoadingScreen from './src/screen/LoadingScreen.js'


const Rotas = () => {
    return (
        <Router navigationBarStyle={{ backGroundColor: '#F2F2F2' }} titleStyle={{ color: '#000' }}>
          <Scene key="root">
            <Scene key='index' component={IndexScreen} title='COVID-19' />
            <Scene key='chart' component={ChartScreen} title='COVID-19' />
            <Scene key='loading' component={LoadingScreen} title='COVID-19' />
          </Scene>
        </Router>
      );
}


export default Rotas;