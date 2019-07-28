import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { theme, mocks } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import rgba from 'hex-to-rgba';
import { Text, Badge, Card, Block} from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles as blockStyles } from '../components/Block';
import { styles as cardStyles } from '../components/Card';




export default class Trip extends Component {


    constructor(props){
        super(props)

        this.state = {
            name: this.props.navigation.state.params.name,
            score: this.props.navigation.state.params.score,
        }
    }

    renderDetail(){
        return(
             <Text>Test ob Name gerendert wird: {this.state.name}</Text>

        )
    }

    render() {
        return (
            <ScrollView style={styles.welcome}>
                {this.renderDetail}    
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
