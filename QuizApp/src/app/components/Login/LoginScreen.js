import React from 'react';
import { Button, ToolbarAndroid, View, StyleSheet } from 'react-native';
import Logo from '../../../../assets/logo.png';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ToolbarAndroid
                    title="Quiz App"
                    titleColor="#FFFFFF"
                    navIcon={Logo}
                    style={{ width: "100%", height: 60, backgroundColor: "#FFFFFF", alignItems: "center" }}
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

const styles = StyleSheet.create({
    label: {
        fontSize: 30,
        color: "#428bca"
    }
});