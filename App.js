import { Styles } from './Styles';
import React, { useState, useEffect } from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Image,
  Platform,
  Pressable,
  Text,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default function App() {

  // Remove console Log
  console.log("App Execution!");
  console.log(Dimensions.get("screen"));

  // This is the MAIN APP code section
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <View
  //       style={{
  //         backgroundColor: "orange",
  //         width: "100%",
  //         height: "33%",
  //       }} >
  //     </View>
  //   </SafeAreaView>
  // );

  let text = "some text over here"

  const [view, setView] = useState("L");

  return (
    <View style={Styles.appBackground}>

      {/* This is the top Section */}
      <View style={Styles.top}>

      </View>

      {/* This is the bottom Section */}
      <View style={Styles.bottom}>

        {/* navigation Buttons */}
        <View style={Styles.buttonAlign}>

          <Pressable onPress={() => setView("L")} >
            <View >
              <Text style={Styles.buttonText}>
                {navButtonLeft}
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => setView("C")} >
            <Text style={Styles.buttonText}>
              {navButtonCenter}
            </Text>
          </Pressable>

          <Pressable onPress={() => setView("R")} >
            <Text style={Styles.buttonText}>
              {navButtonRight}
            </Text>
          </Pressable>

        </View>

        {/* Main window */}
        <View>
          {view === "L" && (
            <Text style={{ alignSelf: "center" }}>
              This is {navButtonLeft} Section
            </Text>
          )}

          {view === "C" && (
            <Text style={{ alignSelf: "center" }}>
              This is {navButtonCenter} Section
            </Text>
          )}

          {view === "R" && (
            <Text style={{ alignSelf: "center" }}>
              This is {navButtonRight} Section
            </Text>
          )}

        </View>

      </View>

    </View>
  );
}

let navButtonLeft = "Milage";
let navButtonCenter = "Maintenance";
let navButtonRight = "Accidents";

// OnPress Function
const handlePress = () => console.log("Text Pressed!");
const buttonPress = () => console.log("Button Pressed!");

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

