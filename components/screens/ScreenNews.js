import React, {useState} from 'react';
import {Alert, Button, FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import axios from "axios";
import NewItem from "../NewItem";
import SearchSettingsStore from "../../store/SearchSettingsStore";


const ScreenNews = ({navigation}) => {

    const API_KEY = "e486b99219a947dd9bdb5d817d15c11d"
    const [news, setNews] = useState([])
    const [search, setSearch] = useState("")

    const periodFrom = SearchSettingsStore.periodFrom
    const periodTo = SearchSettingsStore.periodTo
    const sortBy = SearchSettingsStore.sortBy

    const URL = `https://newsapi.org/v2/everything?q=${search}&from=${periodFrom}&to=${periodTo}&sortBy=${sortBy}&apiKey=${API_KEY}`

    const fetchData = async () => {
        try {
            const {data} = await axios.get(URL)
            if (data){
                await setNews(data.articles)
            }
            console.log("work")
            // setNews(prevState => [...prevState, data.articles])
        } catch (e) {
            console.log(e)
            return e
        }
    }

    const renderNews = ({item}) => (
        <NewItem
            item={item}
            navigation={navigation}
        />
    )

    return (
        <View onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.searchForm}>
                <View style={styles.searchWrapper}>
                    <TextInput value={search} style={styles.searchInput}
                               onChangeText={(text) => setSearch(text)}></TextInput>
                    <Button title={"Search"} onPress={async () => {
                        console.log(news)
                        Keyboard.dismiss()
                        if (search.length !== 0) {
                            await fetchData()
                        } else Alert.alert("Search input must not be empty")
                    }}/>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('SearchSetting')}>
                    <Text style={styles.searchSetting}>
                        Search Setting
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.content}>
                {
                    news.length !== 0 && true ?
                        <FlatList data={news}
                                  renderItem={renderNews}
                                  keyExtractor={item => {
                                      item.title
                                  }}
                        />
                        :
                        <View style={styles.contentNotificationWrapper}>
                            <Text style={styles.contentNotification}>
                                No information for this news
                            </Text>
                        </View>
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 10
    },
    searchForm: {
        alignItems: "center", marginBottom: 10,
    },
    searchWrapper: {
        flexDirection: "row",
        marginBottom: 5
    },
    searchInput: {
        width: "50%", borderStyle: "solid", borderColor: "black", borderWidth: 1,
        marginRight: 10, paddingHorizontal: 10, textAlign: "center"
    },
    searchSetting: {
        fontSize: 15,
        textTransform: "uppercase"
    },
    content: {justifyContent: "center"},
    contentNotificationWrapper: {},
    contentNotification: {textAlign: "center", fontSize: 30, height: "60%"}
})

export default ScreenNews;
