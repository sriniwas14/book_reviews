import React, { Component, Fragment } from 'react'
import { View, ScrollView, Image } from 'react-native';
import { Text, Rating } from 'react-native-elements';
import api from '../../api/ApiCalls';
import SectionItem from './SectionItem';

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
        }).catch((err)=> {
            console.log("ERR", err)
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
                        <SectionItem navigation={this.props.navigation} item={item}/>
                    );
                    })}
                </Fragment>
                </ScrollView>
            </Fragment>
        )
    }
}
