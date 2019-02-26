import React, { Component } from 'react';
import '../sass/main.scss';
import WebFont from 'webfontloader';
import BoardsList from './BoardsList';
import settings from '../utils/settings';
import { Provider } from 'react-redux';
import configureStore from '../store';

const store = configureStore();

export default class App extends Component {
    constructor(props) {
        super(props);

        WebFont.load(settings.fontsLoad);
    }

    render() {
        return (
            <Provider store={store}>
                <BoardsList />
            </Provider>
        )
    }
}