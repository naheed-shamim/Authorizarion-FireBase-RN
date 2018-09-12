import React, { Component } from 'react';
import { View } from 'react-native';
// import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        this.initializeFirebase();
    }

    initializeFirebase() {
        const firebase = require("firebase");
        
        firebase.initializeApp({
            apiKey: 'AIzaSyCDF_YFPi-AO_AhFJWsGDldibmPM6SFo2U',
            authDomain: 'authentication-bed0b.firebaseapp.com',
            databaseURL: 'https://authentication-bed0b.firebaseio.com',
            projectId: 'authentication-bed0b',
            storageBucket: 'authentication-bed0b.appspot.com',
            messagingSenderId: '718859423026'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
