import React, {useState, useEffect} from 'react';
import {withNavigation} from 'react-navigation';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import js from '../assets/languages/javascript-100x100.png';
import java from '../assets/languages/java-100x100.png';
import nodejs from '../assets/languages/nodejs-100x100.png';
import python from '../assets/languages/python-100x100.png';
import php from '../assets/languages/php-100x100.png';

function LanguagesList({tech, navigation}) {
    /*function handleNavigate(id) {
        navigation.navigate('Page', {id});
    } */

    const linguagens = [
        {
            id: 1,
            name: 'Javascript',
            image: 'js.png'
        },
        {
            id: 2,
            name: 'Nodejs',
            image: 'node.png'
        },
        {
            id: 3,
            name: 'Java',
            image: 'java.png'
        }, 
        {
            id: 4,
            name: 'Python',
            image: 'python.png'
        }, 
        {
            id: 5,
            name: 'PHP',
            image: 'php.png'
        },                               
    ];

    function handleNavigate() {}

    function switchImage(id) {
        switch (id) {
            case 1:
                return js;
                break;
            case 2:
                return nodejs;
                break;                
            case 3:
                return java;
                break;  
            case 4:
                return python;
                break;   
            case 5:
                return php;
                break;                                          
            default:
                break;
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                 style={styles.lista}
                 data={linguagens}
                 keyExtractor={escola => String(escola.id)}
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item}) => (
                     <View style={styles.listaItem}>                         
                         <TouchableOpacity onPress={() => handleNavigate(item.id)} style={styles.botao}>
                             <Image style={styles.thumbnail} source={switchImage(item.id)} />
                            <Text style={styles.buttonText}>{item.name}</Text>
                         </TouchableOpacity>
                     </View>
                 )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        textAlign: 'center',
    },
    titulo: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    span: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 10,
    },
    negrito: {
        fontWeight: 'bold',
    },
    list: {
        paddingHorizontal: 20,
    },
    listaItem: {
        paddingHorizontal: 20,
    },
    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10,
        borderWidth: 3,
        borderColor: '#fff',
    },
    botao: {
        height: 150,
        backgroundColor: 'rgba(255,255,255, 0)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        padding: 20,
        marginTop: 15,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 32,
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
    }
});

export default withNavigation(LanguagesList);