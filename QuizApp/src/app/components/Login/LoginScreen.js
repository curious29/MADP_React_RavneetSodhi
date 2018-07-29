import React, { Component } from 'react';
import { Button, ToolbarAndroid, View } from 'react-native';
import Logo from '../../../../assets/logo.png';

export default class LoginScreen extends Component {
    static  navigationOptions  =  {
        title:  'Login',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ToolbarAndroid
                    title="Quiz App"
                    titleColor="#FFFFFF"
                    navIcon={Logo}
                    style={{ width: "100%", height: 60, backgroundColor: "#FFFFFF" }}
                />
                <Button
                    title="Login"
                    onPress={() =>
                        navigate('QuizScreen')
                    }
                />
            </View>
        );
    }
}