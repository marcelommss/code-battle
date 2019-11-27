import React from 'react';
import {SafeAreaView, View, Text, ScrollView, Image, StyleSheet} from 'react-native';

// import SpotList from '../components/SpotList';

import avatar from '../assets/estudantes/estudante2.png';
import medalhas from '../assets/estudantes/medalhas.png';
import trofeus from '../assets/estudantes/trofeus.png';

import VictoriesList from '../components/VictoriesList';

export default function Profile() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileHeader}>   
                <Image source={medalhas} style={styles.ganhos} />         
                <Image source={avatar} style={styles.avatar} />
                <Image source={trofeus} style={styles.ganhos} />
            </View>

            <Text style={styles.batalhasBadge}>Batalhas</Text>
            
            <Text style={styles.span}>Últimas vitórias</Text>

            <ScrollView style={styles.victoriesScroll}>
                <VictoriesList />                            
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c65e7f',        
    },

    profileHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        alignSelf: 'center',
        marginTop: 40,
        borderColor: '#FFF',
        borderWidth: 3,
        height: 100,
        width: 100,
        borderRadius: 50, 
        marginLeft: 20,
        marginRight: 20,       
    },
    premios: {
        marginTop: 40,
        height: 100,
        width: 50,
    },
    batalhasBadge: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: '#8d3450',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 50,  
        width: 200,  
        alignSelf: 'center', 
        textAlign: 'center',
        marginTop: 20, 
        position: 'relative',
        top: 20,  
        zIndex: 100,
    },
    victoriesScroll: {
        backgroundColor: '#fff',
    },
    span: {
        fontSize: 14,
        color: '#333',
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingBottom: 5,
        paddingLeft: 40,
    }
});