import React from 'react';
import {Text, View } from 'react-native';


//make a component
const Header = (properties) => {

    const {textStyle, viewStyle} = styles;

    return (
        <View style = {viewStyle}>
            <Text style = {textStyle}>{properties.headerText}</Text>
        </View>
    );
};  


const styles = {
    viewStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2, 
    },

    textStyle: {
        fontSize: 20
    }
};

// Make the component accessible to other parts of the app.
export {Header};