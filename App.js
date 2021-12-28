import { Styles, NavButtonStyles } from './Styles';
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
  return (view = props, console.log("Set to: " + view));
}

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
  // let NavScrollView;

  // Sets the Navigation Window page
  // NOTES: NavScrollView is set as a React refference. This reference is lost at every refresh, but re-instated at reload.
  //   Not sure if this is the best implementation for the ScrollView here.
  function SetNavView(val) {
    setView(val);
    this.NavScrollView.scrollTo({
      x: Dimensions.get("screen").width * (val - 1),
      y: 0,
      animated: true // Determines if the ScrollView is immediate or animated horizontally 
    });
  }

  // Cookie Clicker
  const [timesPressed, setTimesPressed] = useState(0);


  // constructor(props) {
  //   super(props);
  //   this.NavScrollView = React.createRef();
  // }

  // Main return of App hooks
  return (
    <SafeAreaView style={Styles.appBackground}>

      {/* This is the top Section */}
      <View style={Styles.top}>
        <Pressable onPress={() => setTimesPressed((current) => current + 1)}>
          <View style={Styles.topView}>
            <Text style={Styles.topText}>
              {timesPressed}
            </Text>
          </View>
        </Pressable>
      </View>

      {/* This is the bottom Section */}
      <View style={Styles.bottom}>

        {/* navigation Buttons */}
        <View style={NavButtonStyles.Backing}>
          <View style={NavButtonStyles.PillBar}>
            <View style={NavButtonStyles.buttonView}>

              <Pressable onPress={() => SetNavView(1)}>
                {view == 1
                  ? <View style={NavButtonStyles.SelectView}>
                    <Text style={NavButtonStyles.SelectText}> {navButtonLeft} </Text>
                  </View>
                  : <View style={NavButtonStyles.NonSelectView}>
                    <Text style={NavButtonStyles.NonSelectText}> {navButtonLeft} </Text>
                  </View>
                }
              </Pressable>

              <Pressable onPress={() => SetNavView(2)}>
                <View >
                  {view == 2
                    ? <View style={NavButtonStyles.SelectView}>
                      <Text style={NavButtonStyles.SelectText}> {navButtonCenter} </Text>
                    </View>
                    : <View style={NavButtonStyles.NonSelectView}>
                      <Text style={NavButtonStyles.NonSelectText}> {navButtonCenter} </Text>
                    </View>
                  }
                </View>
              </Pressable>

              <Pressable onPress={() => SetNavView(3)}>
                <View >
                  {view == 3
                    ? <View style={NavButtonStyles.SelectView}>
                      <Text style={NavButtonStyles.SelectText}> {navButtonRight} </Text>
                    </View>
                    : <View style={NavButtonStyles.NonSelectView}>
                      <Text style={NavButtonStyles.NonSelectText}> {navButtonRight} </Text>
                    </View>
                  }
                </View>
              </Pressable>

            </View>
          </View>
        </View>

        {/* Bottom Section window */}
        <ScrollView
          ref={re => this.NavScrollView = re}
          horizontal={true}
          pagingEnabled={true}
          scrollEnabled={false} // Disables manual scrolling
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          scrollEventThrottle={1} // iOS 
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