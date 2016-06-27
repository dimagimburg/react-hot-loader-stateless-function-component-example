import React, { Component } from 'react';
import Stream from './components/Stream';

const tracks = [
    {
        title: 'Some track 11'
    },
    {
        title: 'Some other track 22'
    }
];

export default class App extends Component {
    render() {
        return (
            <div>
                <Stream  tracks={tracks}/>
            </div>
        );
    }
}
