import React, { Component, Fragment } from 'react'
import { StyleSheet, Button, View, ScrollView } from 'react-native';
import { Header, SearchBar, Icon } from 'react-native-elements';
import api from '../../api/ApiCalls';
import Section from './Section'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: "",
      showSearch: false,
      mostRecent: [],
      bestSellers: []
    }
  }
  
  static navigationOptions = {
    title: 'Book Reviews',
    headerStyle: {
        backgroundColor: "#292929"
    },
    headerTintColor: "#fff",
    headerRight: (
        <TouchableOpacity onPress={()=> this.setState({ showSearch: !this.state.showSearch })} style={{ paddingHorizontal: 10 }}>
            <Icon name='search' color="#ffffff"/>
        </TouchableOpacity>
      ),
   };

  bookCategories = [
    {
      title: "Non-Fiction",
      id: "combined-print-and-e-book-nonfiction"
    },
    // {
    //   title: "Fiction",
    //   id: "combined-print-and-e-book-fiction",
    // },
    // {
    //   title: "Advice and How-To",
    //   id: "advice-how-to-and-miscellaneous",
    // },
    // {
    //   title: "Manga",
    //   id: "manga",
    // },
    // {
    //   title: "Young Adult",
    //   id: "young-adult",
    // },
    // {
    //   title: "Food and Fitness",
    //   id: "food-and-fitness",
    // },
    // {
    //   title: "Sports and Fitness",
    //   id: "sports",
    // }
  ]

  searchBooks = (query) => {
    api.searchBooks(query).then((resp) => {
      this.setState({ mostRecent: resp.data.items })
    })
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  updateSearch = search => {
    this.setState({ search: search })
    this.searchBooks(search)
  };

  render() {
    let searchbar;
    const { search, showSearch, bestSellers } = this.state;

    if(showSearch){
      searchbar = <SearchBar placeholder="Type Here..." onChange={this.updateSearch} value={search} platform="android" />
    }
    return (
      <View>
        {/* <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Book Reviews', style: { color: '#fff' } }}
          rightComponent={{ icon: 'search', color: '#fff', onPress: ()=>{ this.setState({ showSearch: !showSearch }) } }}
          containerStyle={{ backgroundColor: "black" }}
        /> */}
        {searchbar}
        <ScrollView>
        {this.bookCategories.map((cat)=> {
            return (<Section navigation={this.props.navigation} key={cat.cat_id} displayName={cat.title} type={cat.id} />)
        })}
        </ScrollView>        

    </View>
    )
  }
}


export default Homepage