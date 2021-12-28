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

// // Handles Navigation view page
// const setView = (props) => {
//   return (view = props, console.log("Set to: " + view));
// }

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

// Navigation Bar Buttons
// const NavBarButtonLeft = () => {
//   return (
//     <Pressable onPress={() => setView(1)} >
//       <View >
//         {view == 1
//           ? <Text style={Styles.navButtonSelect}> {navButtonLeft} </Text>
//           : <Text style={Styles.navButtonNonSelect}> {navButtonLeft} </Text>
//         }
//       </View>
//     </Pressable>
//   );
// }

// Section Names
let navButtonLeft = "Milage";
let navButtonCenter = "Maintenance";
let navButtonRight = "Accidents";

let NavScrollView;

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

  incrementClicker = () => {
    this.setState({ clickerCount: this.state.clickerCount + 1, });
    console.log("Pressed! " + this.state.clickerCount);
  }

  setViewLeft = () => {
    this.setState({ view: 1 })
    NavScrollView.scrollTo({
      x: Dimensions.get("screen").width * (1 - 1),
      y: 0,
      animated: true
    });
  }
  setViewCenter = () => {
    this.setState({ view: 2 })
    NavScrollView.scrollTo({
      x: Dimensions.get("screen").width * (2 - 1),
      y: 0,
      animated: true
    });
  }
  setViewRight = () => {
    this.setState({ view: 3 })
    NavScrollView.scrollTo({
      x: Dimensions.get("screen").width * (3 - 1),
      y: 0,
      animated: true
    });
  }

  // Main return of App hooks
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

                <Pressable onPress={this.setViewLeft}>
                  {this.state.view == 1
                    ? <View style={NavButtonStyles.SelectView}>
                      <Text style={NavButtonStyles.SelectText}> {navButtonLeft} </Text>
                    </View>
                    : <View style={NavButtonStyles.NonSelectView}>
                      <Text style={NavButtonStyles.NonSelectText}> {navButtonLeft} </Text>
                    </View>
                  }
                </Pressable>

                <Pressable onPress={this.setViewCenter}>
                  <View >
                    {this.state.view == 2
                      ? <View style={NavButtonStyles.SelectView}>
                        <Text style={NavButtonStyles.SelectText}> {navButtonCenter} </Text>
                      </View>
                      : <View style={NavButtonStyles.NonSelectView}>
                        <Text style={NavButtonStyles.NonSelectText}> {navButtonCenter} </Text>
                      </View>
                    }
                  </View>
                </Pressable>

                <Pressable onPress={this.setViewRight}>
                  <View >
                    {this.state.view == 3
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