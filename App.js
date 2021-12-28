import { Styles, NavButtonStyles, ScrollViewStyles, MPGLogStyle } from './Styles';
import { MPGLog } from './MPGLog';
import React, { Component, useState, useRef } from 'react';
import {
  Dimensions,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
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

function awaitCall() {
  console.log("Await...");
  setTimeout(function () { console.log("Then call!") }, 2000); // Replace "function ()" with "() =>"
}

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
    let offsetSpacing = "   ";
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
            ref={re => NavScrollView = re} horizontal={true} pagingEnabled={true} scrollEnabled={false}
            showsHorizontalScrollIndicator={false} decelerationRate="fast" scrollEventThrottle={1}
          >

            {/* Creating MPG Log */}
            <View style={ScrollViewStyles.Left}>
              <ScrollView>

                {/* Space reserved for MPG Graph */}
                <View style={{
                  width: Dimensions.get("screen").width,
                  height: 220, // Dimensions.get("screen").height / 4,
                  backgroundColor: "white",
                }}>
                  <Text> MPG Graph </Text>
                </View>


                {/* MPG Log List and Sections */}
                <View style={MPGLogStyle.sectionBar}>
                  <Text style={MPGLogStyle.sectionBarText}> {offsetSpacing}This month </Text>
                </View>

                <MPGLog milage={118736} miles={231.7} gallons={7.654} date={"01/18/2022"} />
                <MPGLog />

                <View style={MPGLogStyle.sectionBar}>
                  <Text style={MPGLogStyle.sectionBarText}> {offsetSpacing}Last month </Text>
                </View>

                <MPGLog />
                <MPGLog />
                <MPGLog />

                <View style={MPGLogStyle.sectionBar}>
                  <Text style={MPGLogStyle.sectionBarText}> {offsetSpacing}October </Text>
                </View>
                <MPGLog />

              </ScrollView>
            </View>

            <View style={ScrollViewStyles.Center}>
              <Text> Child 2 </Text>
            </View>

            <View style={ScrollViewStyles.Right}>
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