import React, {useState, useEffect} from 'react';
import {withNavigation} from 'react-navigation';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import sp from '../assets/sp.png';
import parana from '../assets/parana.png';

function TournamentList({tech, navigation}) {
    /*function handleNavigate(id) {
        navigation.navigate('Page', {id});
    } */

    const escolas = [
        {
            id: 1,
            name: 'Escolas municipais',
            numeroEstudantes: '12.000',
            image: 'sp.png'
        },
        {
            id: 2,
            name: 'Colégio Paraná',
            numeroEstudantes: '7.253',
            image: 'parana.png'
        }        
    ];

    function handleNavigate() {}

    return (
        <View style={styles.container}>
            <FlatList
                 style={styles.lista}
                 data={escolas}
                 keyExtractor={escola => String(escola.id)}
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item}) => (
                     <View style={styles.listaItem}>                         
                         <TouchableOpacity onPress={() => handleNavigate(item.id)} style={styles.botao}>
                             <Image style={styles.thumbnail} source={item.id === 1 ? sp: parana} />
                            <Text style={styles.buttonText}>{item.name}</Text>
                         </TouchableOpacity>
                         <Text style={styles.span}>{item.numeroEstudantes} estudantes</Text>
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
        height: 120,
        marginRight: 10,
    },
    botao: {
        height: 150,
        backgroundColor: '#fff',
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
        fontSize: 15,
        backgroundColor: '#8d3450',
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
    }
});

export default withNavigation(TournamentList);