import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";

const ScreenNewDetails = ({route}) => {

    const {item} = route.params

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    {item.title}
                </Text>
            </View>
            <View>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
            <View>
                {
                    !item.author || item.author.length === 0 ?
                        <Text>
                            No Author
                        </Text>
                        :
                        <Text>
                            {item.author}
                        </Text>
                }
            </View>
            <View>
                <Text>
                    Date of publication : {item.publishedAt.slice(0, 10)}
                </Text>
            </View>
            <View>
                <Text>ID: {item.source.id}</Text>
                <Text style={styles.name}>Name: {item.source.name}</Text>
            </View>
            <View>
                <Image source={{uri: `${item.urlToImage}`}}
                       style={styles.img}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 10
    },
    description: {
        fontSize: 18,
        marginBottom: 10
    },
    name: {
        marginBottom: 10
    },
    img: {
        width: "100%",
        height: 400,
        resizeMode: "cover",
        marginBottom: 30
    }
})

export default ScreenNewDetails;
