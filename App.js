import { Styles, NavButtonStyles } from './Styles';
import React, { Component, useState, useRef } from 'react';
import {
  Alert,
  Animated,
  AppRegistry,
  Dimensions,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

// REMOVE Alert Messages
// const navButtonPressedLeft = () => Alert.alert(navButtonLeft, "Add new " + navButtonLeft + " Log?", [
//   {
//     text: "Add",
//   },
//   {
//     text: "Cancel",
//     style: "cancel",
//   }
// ]);

// Global variables
let NavScrollView;

// Section Names
let navButtonLeft = "Milage";
let navButtonCenter = "Maintenance";
let navButtonRight = "Accidents";

// Button
const NavButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      {props.view == props.setTo
        ? <View style={NavButtonStyles.SelectView}>
          <Text style={NavButtonStyles.SelectText}> {props.text} </Text>
        </View>
        : <View style={NavButtonStyles.NonSelectView}>
          <Text style={NavButtonStyles.NonSelectText}> {props.text} </Text>
        </View>
      }
    </Pressable>
  );
}

// =========== MAIN APP ===============
// const App = () => {
class AppTest extends Component {
  // Cosntructor
  constructor(props) {
    super(props);
    NavScrollView = React.createRef();
  }

  // State Variables
  state = {
    clickerCount: 0,
    view: 1,
  }

  // Increment Counter from this.state
  incrementClicker = () => {
    this.setState({ clickerCount: this.state.clickerCount + 1, });
    console.log("Pressed! " + this.state.clickerCount);
  }

  // Update View to math state
  setView = (val) => {
    this.setState({ view: val })
    NavScrollView.scrollTo({
      x: Dimensions.get("screen").width * (val - 1),
      y: 0,
      animated: true
    });
  }

  // Render of App
  render() {
    return (
      <SafeAreaView style={Styles.appBackground}>

        {/* This is the top Section */}
        <View style={Styles.top}>
          <Pressable onPress={this.incrementClicker}>
            <View style={Styles.topView}>
              <Text style={Styles.topText}>
                {this.state.clickerCount}
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
                <NavButton view={this.state.view} setTo={1} text={navButtonLeft} onPress={() => this.setView(1)} />
                <NavButton view={this.state.view} setTo={2} text={navButtonCenter} onPress={() => this.setView(2)} />
                <NavButton view={this.state.view} setTo={3} text={navButtonRight} onPress={() => this.setView(3)} />
              </View>
            </View>
          </View>

          {/* Bottom Section window */}
          <ScrollView
            ref={re => NavScrollView = re}
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
}

// Export the main App
export default AppTest;