import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TO-DO</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Main;