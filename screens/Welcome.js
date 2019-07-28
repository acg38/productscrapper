import React, { Component } from 'react'
import {  FlatList, StyleSheet, ScrollView, Image } from 'react-native'
import { theme, mocks } from '../constants';
import { LinearGradient } from 'expo';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import rgba from 'hex-to-rgba';
import { Text, Badge, Card, Block} from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles as blockStyles } from '../components/Block';
import { styles as cardStyles } from '../components/Card';



export default class Welcome extends Component {
    static navigationOptions = {
        headerTitle: <Text style={theme.fonts.header}>Herzlich Willkommen</Text>
    }

    // state = {
    //     search: '',
    //   };

    // updateSearch = search => {
    //     this.setState({ search });
    // };



    renderMonthly(){
        const { navigation } = this.props;

        return(
            <TouchableOpacity 
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Rewards")}
            >
                <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
                    <Image 
                        resizeMode = "contain"
                        source={require('../assets/images/icon/More.png')}
                        style={styles.moreIcon}
                    />
                    <Block>
                        <Block center>
                            <Text h1 spacing={1.7}>38,99€</Text>
                            <Text color={theme.colors.gray} spacing={0.7}>Durschnittspreis</Text>
                        </Block>

                        <Block color={theme.colors.gray} style={ styles.hLine}/>

                        <Block row>
                            <Block center>
                                <Text size={20} spacing={0.6} style={{ marginBottom: 6 }}>3200</Text>
                                <Text body spacing={0.7} color={theme.colors.gray}>Bestellungen</Text>
                            </Block>

                            <Block flex={false} color={theme.colors.gray} style={ styles.vLine}/>

                            <Block center>
                                <Text size={20} spacing={0.6} style={{ marginBottom: 6 }}>83903</Text>
                                <Text body spacing={0.7} color={theme.colors.gray}>Bewertungen</Text>
                            </Block>

                        </Block>
                    </Block>
                </Card>
            </TouchableOpacity>
        )
    }


    renderAwards(){
        const { navigation } = this.props;

        return(
        // Linear Gradient macht Farbübergänge geil. Die Colors zeigen die Übergänge auf.
        
         <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("AddItem")}
         > 
            <LinearGradient
                end = {{ x:1, y:0}}
                style={[blockStyles.row, cardStyles.card, styles.awards]}
                colors={[ "#ff5d9e" , "#d52484"] }
            >

        {/* Hier ist der runde Icon mit Plus bisschen mit rgba etc rumgespielt um das Design aufzupimpen */}
                <Block middle flex={0.4}>
                    <Badge color={rgba(theme.colors.white, '0.4')} size={32}>
                        <Badge color={rgba(theme.colors.white, '0.2')} size={22}>
                            {/* Propleme mit Icon gehabt hab bei Icon.FontAwesome das FontAwesome raugepack */}
                          <Icon name="plus" color="white" size ={12} />
                        </Badge>
                    </Badge>
                </Block>

                <Block middle>
                    <Text white size={22} spacing={0.9}> Scrapy!</Text>
                    <Text white spacing={0.9}> Add new Item to scrape!</Text>
                </Block>
            </LinearGradient> 
         </TouchableOpacity>
        )
    }



    renderTrip = trip => {
        const { navigation } = this.props;
        return(
          <TouchableOpacity
            activeOpacity={0.8}
            id={trip.id}
            onPress={() => this.props.navigation.navigate('Trip',{
                name: trip.name,
                score: trip.score,
            })}>
            
            <Card color = {theme.colors.gray3}> {/* Das kommt eigentlich in CARD rein.. shadow key={`trip-${trip.id}`}  */}
            <Block row space="between">

                <Block flex= {false} style={{ marginRight: 9}}>
                    <Badge color={rgba(theme.colors.black, '0.4')} size={32}>
                        <Badge color={rgba(theme.colors.black, '0.2')} size={22}>
                             {/* Propleme mit Icon gehabt hab bei Icon.FontAwesome das FontAwesome raugepack */}
                          <Icon name="image" color="white" size ={12} />
                        </Badge>
                    </Badge>
                </Block>
                <Block>
                <Text caption size={16} spacing={0.6} style={{ marginBottom: 3 }} color={theme.colors.black}>{trip.name}</Text>
                 <Text caption size={12} spacing={0.6} style={{ marginBottom: 3 }} gray>{trip.supplier}</Text>
                 {/* <Text caption size={12} spacing={0.6} style={{ marginBottom: 3 }} gray>{trip.date}</Text> */}

                 <Text caption size={12} spacing={0.6} style={{ marginBottom: 3} } gray>{trip.score} 
                    <Icon name="star" color={theme.colors.tertiary} size ={12} />
                </Text>
                 </Block>
                
                
                 <Block>
                 <Text caption size={22} spacing={2} gray right style={{ marginTop: 6}}>{trip.price}</Text>
                 </Block>
            </Block>
            </Card>
          </TouchableOpacity>
        )
    }

    renderTrips(){

        return(
           <React.Fragment> 
            <Block style={{ marginBottom: theme.sizes.base }}>
              <Text spacing={0.4} transform="uppercase">
                  Scraped Items
              </Text>
            </Block>


            <FlatList 
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderTrip= {trip=> this.renderTrip(trip)}
            keyExtractor= {trip=>trip.id.toString()}
          />

           {/* {mocks.trips.map(trip => this.renderTrip(trip))} */}

          </React.Fragment>  
        )
    }

    // renderSearchBar(){
    //     return(
    //         <SearchBar placeholder="Type Here..." onChangeText={this.updateSearch} value={this.search}/>
    //     )
    // }

    render() {
        return (
            <ScrollView style={styles.welcome}>
                {this.renderMonthly()}
                {this.renderAwards()}
                {/* {this.renderSearchBar()} */}
                {this.renderTrips()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        paddingVertical: theme.sizes.padding,
        paddingHorizontal: theme.sizes.padding,
        backgroundColor: theme.colors.gray3,
    },
    hLine: {
        marginHorizontal: theme.sizes.base * 2,
        marginVertical: theme.sizes.base * 2,
        height: 1,
    },
    vLine: {
        marginVertical: theme.sizes.base / 2,
        width: 1,
        marginHorizontal: 2,
    },
    moreIcon: {
        width: 16,
        height: 17,
        position: "absolute",
        right: theme.sizes.base,
        top: theme.sizes.base,
    },
    awards: {
        padding: theme.sizes.base,
        marginBottom: theme.sizes.padding,
    },
})
