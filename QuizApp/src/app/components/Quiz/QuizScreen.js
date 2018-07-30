import React from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import questoinList from '../../../../assets/questions.json';

export default class QuizScreen extends React.Component {
    static navigationOptions = {
        title: 'QuizApp',
    };
    constructor(props) {
        super(props)
        this.state = {
            questions: questoinList.questions,
            index: 0,
            numberOfQuestions: questoinList.questions.length,
            score: 0,
            answers: [],
            completed: false,
            nextDisabled: false,
            previousDisabled: true
        }
    }

    onNext() {
        let newIndex = this.state.index + 1;
        this.setState({ 'index': newIndex });
        if (newIndex == this.state.questions.length - 1) {
            this.setState({ 'completed': true });
        }
    }

    onPrevious() {
        this.setState({ 'index': this.state.index - 1 })
    }

    onSubmit() {
        let score = this.state.score || 0
        this.state.answers.forEach((element, i) => {
            let option = this.state.questions[i].options.filter((optn) => {
                if (optn.code == element) {
                    return optn;
                }
            })
            score = score + option[0].point;
        });
        this.setState({ 'score': score });
        this.props.navigation.navigate('DashboardScreen', {
            TotalScore: score
        });
    }


    onAnswerSelected(optionCode) {
        this.state.questions[this.state.index].options.forEach(opt => {
            if (opt.code != optionCode) {
                opt.isSelected = false;
            }
        });

        let list = [
            ...this.state.answers.slice(0, this.state.index),
            parseInt(optionCode),
            ...this.state.answers.slice(this.state.index + 1)
        ]

        this.setState({ 'answers': list })
    }

    _keyExtractor = (item, index) => item.code;

    _renderItem = ({ item }) => (
        <Button style={styles.answerButton}
            title={item.description}
            onPress={() => {
                item.isSelected = true;
                this.onAnswerSelected(item.code)
            }}
            color={item.isSelected ? 'green' : 'blue'}
        />
    );

    render() {
        return (
            <View>
                {!this.state.completed ?
                    <View>
                        <Text style={styles.label}>{this.state.questions[this.state.index].description}</Text>
                        <FlatList
                            data={this.state.questions[this.state.index].options}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                        />
                        <Button title="Next" disabled={this.state.index == this.state.questions.length - 1} onPress={this.onNext.bind(this)} />
                        <Button title="Previous" disabled={this.state.index == 0} onPress={this.onPrevious.bind(this)} />
                    </View>
                    :
                    <View>
                        <Text style={styles.label}>Submit to view your score</Text>
                        <Button style={styles.button} onPress={this.onSubmit.bind(this)} title="Submit"></Button>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    answerButton: {
        width: "50",
        fontSize: 20
    },
    label: {
        fontSize: 30,
        color: "#428bca"
    },
    button: {
        fontSize: 20
    }
});