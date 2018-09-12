import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPressed, children}) => {

    const {buttonStyle, buttonTextStyle} = styles;

    return (
        <TouchableOpacity onPress={onPressed} style = {buttonStyle}>
            <Text style={buttonTextStyle}>
            Buy Now 
            </Text>
        </TouchableOpacity>
    )
}

const styles = {

    buttonStyle : {
        flex:1,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,
        alignSelf : 'stretch'
    },

    buttonTextStyle:{
        alignSelf : 'center',
        color:'#007aff',
        fontSize:15,
        fontWeight:'600',
        paddingBottom:10,
        paddingTop:10


    }
};

export { Button };