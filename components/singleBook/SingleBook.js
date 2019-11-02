import React, { Component, Fragment } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Icon, Image, Rating, Divider } from 'react-native-elements';
import api from '../../api/ApiCalls';

export default class SingleBook extends Component {
    constructor(props){
        super(props)
        this.state = {
            isbn: this.props.navigation.state.params.isbn
        }

        this.singleBook(this.state.isbn)
    }
    static navigationOptions = {
        title: 'Book Reviews',
        headerStyle: {
            backgroundColor: "#000000",
            fontWeight: "200",
            fontSize: "12px"
        },
        headerTintColor: "#fff"
    };

   singleBook = (isbn) => {
       api.singleBook(isbn).then((resp)=>{
        console.log("OBOO", isbn)
            this.setState({ book: resp.data.items[0] })
       }).catch((err)=> {
           console.log("ISBN is invalid", err)
       })
   }

    render() {
        var obj;

        if(this.state.book){
            const { book } = this.state

            obj = (
                <ScrollView>
                    <View style={{ backgroundColor: "#191919", justifyContent: "center", alignItems: "center" }}>
                        <Image style={{ width: 160, height: 250 }} source={{ uri: book.volumeInfo.imageLinks.thumbnail }}></Image>
                    </View>
                    <View style={{ padding: 12 }}>
                        <Text style={{ fontSize: 24, marginVertical: 5 }}>{ book.volumeInfo.title }</Text>
                        <Text style={{ fontSize: 18, color: "#007acc", marginVertical: 5 }}>by { book.volumeInfo.authors[0] }</Text>
                        <Rating
                            type='star'
                            ratingCount={5}
                            startingValue={ 2 }
                            imageSize={20}
                            style={{ alignItems: "flex-start", marginVertical: 5 }}
                            onFinishRating={this.ratingCompleted}
                            />
                        <Text stye={{ fontSize: 16, marginVertical: 5 }}>Pages: { book.volumeInfo.pageCount }</Text>
                        <Divider style={{ backgroundColor: '#e5e5e5', marginVertical: 15 }} />
                        <Text>{ book.volumeInfo.description }</Text>
                    </View>
                </ScrollView>
            )
        }
        return (
            <Fragment>
                {obj}
            </Fragment>
        )
    }
}
