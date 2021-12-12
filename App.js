import { Styles } from './Styles';
import React, { useState, useRef } from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

// Section Names
let navButtonLeft = "Milage";
let navButtonCenter = "Maintenance";
let navButtonRight = "Accidents";

// Handles Navigation view page
const setView = (props) => {
  return(view = props, console.log("Set to: " + view));
}

// OnPress Function
const handlePress = () => console.log("Text Pressed!");
const buttonPress = () => console.log("Button Pressed!");

// REMOVE Alert Messages
const navButtonPressedLeft = () => Alert.alert(navButtonLeft, "Add new " + navButtonLeft + " Log?", [
  {
    text: "Add",
  },
  {
    text: "Cancel",
    style: "cancel",
  }
]);
const navButtonPressedCenter = () => Alert.alert(navButtonCenter, "Add new " + navButtonCenter + " Log?", [
  {
    text: "New " + navButtonLeft,
  },
  {
    text: "Cancel",
    style: "cancel",
  }
]);
const navButtonPressedRight = () => Alert.alert(navButtonRight, "Add new " + navButtonRight + " Log?", [
  {
    text: "Accidents",
  },
  {
    text: "Cancel",
    style: "cancel",
  }
]);

// Navigation Bar Buttons
const NavBarButtonLeft = () => {
  return (
    <Pressable onPress={() => setView(1)} >
      <View > 
        {view == 1 
          ? <Text style={Styles.navButtonSelect}> {navButtonLeft} </Text>
          : <Text style={Styles.navButtonNonSelect}> {navButtonLeft} </Text>
        }
      </View>
    </Pressable>
  );
}


// Navigation Bar Info Sections
const BottomInfoLeft = () => {
  return (
    <Text style={{ alignSelf: "center" }}>
      This is {navButtonLeft} Section
    </Text>
  );
}
const BottomInfoCenter = () => {
  return (
    <Text style={{ alignSelf: "center" }}>
      This is {navButtonCenter} Section
    </Text>
  );
}
const BottomInfoRight = () => {
  return (
    <Text style={{ alignSelf: "center" }}>
      This is {navButtonRight} Section
    </Text>
  );
}

// =========== MAIN APP ===============
const App = () => {
  
  // Variable declarations
  StatusBar.setBarStyle('light-content', true);
  const [view, setView] = useState(1);
  // let selectionStyle

  // Animation for Scroll View
  const scrollX = useRef(new Animated.Value(0)).current;

  // Cookie Clicker
  const [timesPressed, setTimesPressed] = useState(0);

  // Main return of App hooks
  return (
    <SafeAreaView style={Styles.appBackground}>

      {/* This is the top Section */}
      <View style={Styles.top}>
        <Pressable onPress={() => setTimesPressed((current) => current + 1)}>
          <Text style={Styles.topText}>
            {timesPressed}
          </Text>
        </Pressable>
      </View>

      {/* This is the bottom Section */}
      <View style={Styles.bottom}>
      
        {/* navigation Buttons */}
        <View style={Styles.navButtonAlign}>
          <Pressable onPress={() => setView(1)} >
            <View > 
              {view == 1 
                ? <Text style={Styles.navButtonSelect}> {navButtonLeft} </Text>
                : <Text style={Styles.navButtonNonSelect}> {navButtonLeft} </Text>
              }
            </View>
          </Pressable>

          <Pressable onPress={() => setView(2)} >
            <View >
              {view == 2
                ? <Text style={Styles.navButtonSelect}> {navButtonCenter} </Text>
                : <Text style={Styles.navButtonNonSelect}> {navButtonCenter} </Text>
              }
            </View>
          </Pressable>

          <Pressable onPress={() => setView(3)} >
            <View >
              {view == 3
                ? <Text style={Styles.navButtonSelect}> {navButtonRight} </Text>
                : <Text style={Styles.navButtonNonSelect}> {navButtonRight} </Text>
              }
            </View>
          </Pressable>
        </View>

        {/* Bottom Section window */}
        {/* <View style={Styles.bottomSubSections}> */}
          {/* Original Sections */}
          {/* {view == 1 && ( <BottomInfoLeft/> )} */}
          {/* {view == 2 && ( <BottomInfoCenter/> )} */}
          {/* {view == 3 && ( <BottomInfoRight/> )} */}
        {/* </View> */}

          {/* Implementing ScrollView */}
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: scrollX} } } ],
              {useNativeDriver: false})
            }
            // onMomentumScrollBegin={() => setView(3)}
          >
            <View style={Styles.scrollViewContainer1}>
              <Text> Child 1 </Text>
            </View>

            <View style={Styles.scrollViewContainer2}>
              <Text> Child 2 </Text>
            </View>

            <View style={Styles.scrollViewContainer3}>
              <Text> Child 3 </Text>
            </View>

          </ScrollView>



      </View>
    </SafeAreaView>
  );
}

// Export the main App
export default App;