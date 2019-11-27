import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppLoading, Asset } from "expo";

import Navigation from "./navigation";
import { Block } from "./components/Block";

// import all used images
const images = [
  require("./assets/icons/back.png"),
  require("./assets/images/avatar.png")
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  // handleResourcesAsync = async () => {
  //   // we're caching all the images
  //   // for better performance on the app

  //   const cacheImages = images.map(image => {
  //     return Asset.fromModule(image).downloadAsync();
  //   });

  //   return Promise.all(cacheImages);
  // };

  render() {
    //   if (!this.state.isLoadingComplete) {
    //     return (
    //       <AppLoading
    //         startAsync={this.handleResourcesAsync}
    //         onError={error => console.warn(error)}
    //         onFinish={() => this.setState({ isLoadingComplete: true })}
    //       />
    //     );
    //   }

    return (
      <Block white>
        <Navigation theme="dark" />
      </Block>
    );
  }
}

const styles = StyleSheet.create({});

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Ready for Launch!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
