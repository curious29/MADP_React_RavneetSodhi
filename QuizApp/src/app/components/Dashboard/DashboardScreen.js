import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard',
    };

    constructor(props) {
        super(props);
        this.score = this.props.navigation.getParam('TotalScore', 0);
    }
    render() {
        return (
            <View>
                <Text>Your score is {this.score}. Thanks for taking the quiz.</Text>
            </View>
        );
    }
}