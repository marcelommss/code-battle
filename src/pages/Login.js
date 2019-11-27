import React, {useState, useEffect} from 'react';

import {View,  KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import logo from '../assets/logo.png';

export default function Login({navigation}) {

    async function handleSubmit() {
        navigation.navigate('Profile');
    }


    return (
        //<KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior='padding' style={styles.container}> ORIGINAL DA AULA
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Image source={logo} style={styles.logo} />

            <View style={styles.form}>
                 <Text style={styles.label}>E-MAIL</Text>                
                 <TextInput
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value=''
                    //onChange={event} no React Native usa-se como abaixo
                    onChangeText={() =>{}}
                 />

                 <Text style={styles.label}>SENHA</Text>                
                 <TextInput
                    style={styles.input}
                    placeholder="Digite a sua senha"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                    textContentType='password'    
                 />
                <Text style={styles.label}>esqueci minha senha</Text> 
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
           
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },

    logo: {
        width: 130,
        height: 150,
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    label: {
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },

    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingHorizontal: 5,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button: {
        height: 42,
        width: 200,
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21,
        marginTop: 32,
    },

    buttonText: {
        color: '#c65e7f',
        fontWeight: 'bold',
        fontSize: 16,
    }
});