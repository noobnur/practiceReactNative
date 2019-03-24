import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const name = "Jane"


import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
      <Button
        title="Go to more stuff"
        onPress={() => navigate('Stuff', {name: 'Jane'})}
      />

      <Text>
        Hello everyone, welcome to my page
      </Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile Screen',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
       </View>
    );
  }
}

class StuffScreen extends React.Component {
  static navigationOptions = {
    title: 'More Stuff Screen',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>More stuff for {name}</Text>
       </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Stuff: {screen: StuffScreen}
});

const App = createAppContainer(MainNavigator);

export default App;

