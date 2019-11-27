import React, {useState, useEffect} from 'react';
import {withNavigation} from 'react-navigation';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import js from '../assets/languages/javascript-100x100.png';
import java from '../assets/languages/java-100x100.png';
import nodejs from '../assets/languages/nodejs-100x100.png';
import python from '../assets/languages/python-100x100.png';
import php from '../assets/languages/php-100x100.png';

import Estudantes from '../assets/estudantes';

function VictoriesList({tech, navigation}) {
    /*function handleNavigate(id) {
        navigation.navigate('Page', {id});
    } */

    const linguagens = [
        {
            id: 1,
            name: 'Elton Musk',
            oponent: Estudantes[0],
            image: 'js.png'
        },
        {
            id: 2,
            name: 'Lia Torvalds',
            oponent: Estudantes[1],
            image: 'node.png'
        },
        {
            id: 3,
            name: 'Tiago Jobs',
            oponent: Estudantes[2],
            image: 'java.png'
        }, 
        {
            id: 4,
            name: 'Estela Wozniak',
            oponent: Estudantes[3],
            image: 'python.png'
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
                             <View style={styles.oponentsAvatarArea}>
                             <Image style={styles.oponentsAvatar} source={item.oponent} /> 
                                <Image style={styles.thumbnail} source={switchImage(item.id)} />                                                                
                             </View>                            

                            <View style={styles.oponentsData}>
                            <Text style={styles.oponentName}>{item.name}</Text>
                            <Text style={styles.oponentStats}>#56 12 vitórias 34 derrotas</Text>
                            </View>
                         </TouchableOpacity>
                     </View>
                 )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 0,
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
    },
    listaItem: { 
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,                
    },
    oponentsAvatarArea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    oponentsAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#fff', 
        position: 'relative',
        left: 0,
        zIndex: 15,                 
    },    
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#fff',
        alignSelf: 'flex-start',
        position: 'relative',
        left: -10,        
    },
    botao: {
        height: 100,
        backgroundColor: 'rgba(255,255,255, 0)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 20,
    },
    oponentsData: {
        flexDirection: 'column',
        justifyContent: 'center',    
        width: 220,
    },
    oponentName: {
        color: '#777',
        fontSize: 26,
    },
    oponentStats: {
        color: '#777',
        fontSize: 16,
    }    
});

export default withNavigation(VictoriesList);