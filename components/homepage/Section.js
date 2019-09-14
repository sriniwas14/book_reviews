import React, { Component, Fragment } from 'react'
import { View, ScrollView, Image } from 'react-native';
import { Text, Rating } from 'react-native-elements';
import api from '../../api/ApiCalls';

export default class Section extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: []
        }

        this.fetchBooks(this.props.type)
    }
    

    fetchBooks = (catName) => {
        api.bestSellers(catName).then((resp)=> {
            this.setState({ books: resp.data.results.books })
        })
    }
    render() {
        const { books } = this.state;
        return (
            <Fragment>
                <Text style={{ backgroundColor: "#f9f5f5", fontSize: 19, padding: 11 }}>{this.props.displayName}</Text>
                <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
                <Fragment>
                    {books.map((item)=> {
                    return (
                        <View style={{ margin: 10 }}>
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
                        </View>
                    );
                    })}
                </Fragment>
                </ScrollView>
            </Fragment>
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
