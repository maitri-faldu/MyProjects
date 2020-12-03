import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions,Image, ScrollView, Button } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

var screenWidth = Dimensions.get('window').width;

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.MainContainer}>
        <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        
        <View style={styles.ButtonViewContainer}>
            <View style={styles.ButtonContainer}>
              <Button title="Food" color="gray"
               />
            </View>
            <View style={styles.ButtonContainer}>
              <Button title="travel" color="gray" />
            </View>
            <View style={styles.ButtonContainer}>
              <Button title="Style" color="gray" />
            </View>
            <View style={styles.ButtonContainer}>
              <Button 
              title="News"
              color="gray" />
            </View>
            <View style={styles.ButtonContainer}>
              <Button title="Music" color="gray" />
            </View>
            <View style={styles.ButtonContainer}>
              <Button title="Sports" color="gray" />
            </View>
            <View style={styles.ButtonContainer}>
              <Button title="Trends" color="gray" />
            </View>
        </View>
        </ScrollView>
     
    <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        
        >
        <View style={styles.ScrollContainer}>
        <View style={styles.Imagecontainer}>
        <View>
          
          <Image source = {{uri:'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}}
                style = {{ width: 360, height:300,marginTop: 15}}
              />
          <Image source = {{uri:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'}}
                style = {{ width: 360, height:300,  marginTop: 20,}}
              />
        </View>
      </View>
            </View>
        <View style={styles.ScrollContainer}>
        <View style={styles.Imagecontainer}>
        
        <View>
          
          <Image source = {{uri:'https://www.transindiatravels.com/wp-content/uploads/jaisalmer-fort-jaisalmer.jpg'}}
                style = {{ width: 360, height:300,marginTop: 15}}
              />
          <Image source = {{uri:'https://www.transindiatravels.com/wp-content/uploads/backwaters-kerala-1.jpg'}}
                style = {{ width: 360, height:300,  marginTop: 20,}}
              />
        </View>
    </View>
    </View>
    <View style={styles.ScrollContainer}>
        <View style={styles.Imagecontainer}>
        
        <View>
          
          <Image source = {{uri:'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'}}
                style = {{ width: 360, height:300,marginTop: 15}}
              />
          <Image source = {{uri:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'}}
                style = {{ width: 360, height:300,  marginTop: 20,}}
              />
        </View>
    </View>
    </View>
      
          </ScrollView>
        </View>
      );
    }
  }
  
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor:`#dcdcdc`,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  ScrollContainer: {
    backgroundColor:`#f8f8ff` ,
    flexGrow: 0,
    marginTop: 0,
    width: screenWidth,
    height:650,
    
    //justifyContent: 'center',
    //alignItems: 'top',
  },
  /*Imagecontainer: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  },*/
  
  
  ButtonViewContainer: {
    flexDirection: 'row',
    paddingTop: 30,
  },
  ButtonContainer: {
    padding: 10,
    
  },
});