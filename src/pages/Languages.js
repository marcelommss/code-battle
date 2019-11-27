import React from 'react';
import {SafeAreaView, ScrollView, Image, StyleSheet} from 'react-native';

import LanguagesList from '../components/LanguagesList';

export default function List() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <LanguagesList />
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c65e7f',        
    },
});