import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgetPassword from "../screens/ForgetPassword";
import Profile from "../screens/Profile";
import History from "../screens/History";
import Battle from "../screens/Battle";
import Settings from "../screens/Settings";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    // Welcome,
    // Login
    // SignUp,
    // ForgetPassword,
    Profile,
    // History,
    Battle
    // Settings,
  },
  {
    initialRouteName: "Profile"
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screens);
