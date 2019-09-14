import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Rating } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class SectionItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const item = this.props.item;
        return (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Single', { isbn: item.isbns[0].isbn13 })} key={item.id} style={{ margin: 10 }}>
                        <Image source={{ uri: item.book_image }} style={{ height: 250, width: 160}}/>
                        <Text style={{ width: 160 }}>{ this.shortenString(item.title) }</Text>
                        <Text style={{ color: "#007acc" }}>by { item.author }</Text>
                        <Rating
                            type='star'
                            ratingCount={5}
                            startingValue={ 2 }
                            imageSize={20}
                            style={{ alignItems: "flex-start" }}
                            onFinishRating={this.ratingCompleted}
                            />
            </TouchableOpacity>
        )
    }
    shortenString(string) {
        if(string.length > 30) {
        return string.substring(0,20)+"..."
        } else {
        return string
        }
    }
}
