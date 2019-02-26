import React, { Component } from 'react';
import styles from './test.module.scss';

export default class Test extends Component {
    render() {        
        return (
            <div className = {styles.test}>Hello</div>
        )
    }
}