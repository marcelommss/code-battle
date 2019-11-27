import React from 'react';
import {SafeAreaView, ScrollView, Image, StyleSheet, Text} from 'react-native';

import TournamentList from '../components/TournamentList';

import logo from '../assets/logo.png';

export default function List() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TournamentList />
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c65e7f',
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 40,
    }
});