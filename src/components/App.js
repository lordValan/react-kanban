import React, { Component } from 'react';
import '../sass/main.scss';
import WebFont from 'webfontloader';
import Test from './Test';
import { settings as AppSettings } from '../constants';

export default class App extends Component {
    constructor(props) {
        super(props);

        WebFont.load(AppSettings.fontsLoad);
    }

    render() {
        return (
            <Test />
        )
    }
}