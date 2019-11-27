import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Languages from './pages/Languages';
import Tournaments from './pages/Tournaments';

const Routes = createAppContainer(
    createSwitchNavigator(
        {
          /*Login: createSwitchNavigator({
            Login,
          }),*/
          App: createBottomTabNavigator(
            {
              Profile: {
                screen: createStackNavigator(
                  {
                    Profile,
                  },
                  {
                    defaultNavigationOptions: {
                        headerStyle: {
                            backgroundColor: '#8d3450',
                          },                            
                      headerTitle: (
                        <Text>Perfil</Text>
                      ),
                      headerTransparent: false,
                      headerTintColor: '#fff',
                      headerTitleContainerStyle: {
                        display: 'flex',
                        justifyContent: 'center',
                      },
                    },
                  }
                ),
                navigationOptions: {
                  tabBarVisible: true,
                  tabBarLabel: 'Perfil',
                  tabBarIcon: ({ tintColor }) => (
                    <Icon name="account-circle" size={26} color={tintColor} />
                  ),
                },
              },
              Languages: {
                screen: createStackNavigator(
                  {
                    Languages,
                  },
                  {
                    defaultNavigationOptions: {
                        headerStyle: {
                            backgroundColor: '#8d3450',
                          },                         
                      headerTitle: (
                        <Text>Linguagens</Text>
                      ),
                      headerTransparent: false,
                      headerTintColor: '#fff',
                      headerTitleContainerStyle: {
                        display: 'flex',
                        justifyContent: 'center',
                      },
                    },
                  }
                ),
                navigationOptions: {
                  tabBarVisible: true,
                  tabBarLabel: 'Linguagens',
                  tabBarIcon: ({ tintColor }) => (
                    <Icon name="code" size={26} color={tintColor} />
                  ),
                },
              },              
              Tournaments: {
                screen: createStackNavigator(
                  {
                    Tournaments,
                  },
                  {
                    defaultNavigationOptions: {
                    headerStyle: {
                            backgroundColor: '#8d3450',
                          }, 
                    headerTintColor: '#fff',                      
                    headerTitle: (
                        <Text>Torneios</Text>
                      ),  
                      headerTitleContainerStyle: {
                        display: 'flex',
                        justifyContent: 'center',
                      },                                         
                    },
                  }
                ),
                navigationOptions: {
                  tabBarVisible: true,
                  tabBarLabel: 'Torneios',
                  tabBarIcon: ({ tintColor }) => (
                    <Icon name="grade" size={26} color={tintColor} />
                  ),
                },
              },
            },
            {
              resetOnBlur: true,
              tabBarOptions: {
                keyboardHidesTabBar: false,
                activeTintColor: '#c65e7f',
                inactiveTintColor: '#ccc',
                style: {
                  backgroundColor: '#FFF',
                  paddingBottom: 20,
                  paddingTop: 20,
                  height: 80,
                },
                labelStyle: {
                  fontSize: 16,
                },
              },
            }
          ),
        },
        {
          initialRouteName: 'App',
        }
      )
);

export default Routes;