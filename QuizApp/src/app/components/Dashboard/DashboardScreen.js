import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DashboardScreen extends React.Component {
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
                <Text style={styles.label}>Your score is {this.score}. Thanks for taking the quiz.</Text>
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