import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, RefreshControl, ActivityIndicator, Button, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import myItemSeparator from './myItemSeparator';
import myListEmpty from './myListEmpty';
import { useState, useEffect } from 'react';

export default function DetailsScreen({ route }) {
    // console.log("here is the props", route.params)
    route.params = {
        item: {
            id: "1", title: "레이블라우스", discount: "10%", description: "Description of the book.. \
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dicount: "10%", price: '57, 600', src: 'https: \/\/ images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6'
        }
    };
    return (
        <View>

            <View style={styles.container}>

                <View style={{ backgroundColor: '#529FF3', margin: 10 }}>
                    <Image source={{ uri: route.params.item.src }} style={{ height: 100, width: 100, alignSelf: 'center' }} />
                </View>
                <View style={{ alignItems: 'stretch', flexDirection: 'column' }}>
                    <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black' }}>
                        {route.params.item.title} </Text>
                    <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black' }}>
                        {route.params.item.description} 원</Text>



                    <View style={{ alignItems: 'stretch', flexDirection: 'row' }}>

                        <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'red' }}>
                            {route.params.item.discount} 원</Text>
                        <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black', alignSelf: 'flex-end' }}>
                            {route.params.item.price} 원</Text>
                    </View >
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,

    },
    item: {
        padding: 20,
        fontSize: 15,
        marginTop: 5,
    }
})
