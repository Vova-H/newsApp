import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";


const NewItem = ({navigation, item}) => {

    let shortDesc
    if (item.description.length > 100) {
        shortDesc = item.description.slice(0, 100).concat("...")
    }

    return (
        <View style={styles.newItemWrapper}>
            <View>
                <Text style={styles.newTitle}>
                    {item.title}
                </Text>
            </View>

            <View style={styles.newDescriptionWrapper}>
                <Text style={{color: "blue"}}>
                    {
                        shortDesc
                    }
                </Text>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Details', {
                    item
                })
            }}>
                <Text style={styles.seeMore}>
                    See More
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    newItemWrapper: {
        marginBottom: 20,
        backgroundColor: "rgba(97,231,207,0.59)",
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    newTitle: {
        fontSize: 20,
        textAlign: "center"
    },
    newDescription: {
        fontSize: 16,
        marginBottom: 15,
    },
    newDescriptionWrapper: {
        marginBottom: 15,
    },
    seeMore: {
        fontSize: 14,
        color: "#545454",
        textAlign: "center",
        justifyContent: "center"
    }
})

export default NewItem;
