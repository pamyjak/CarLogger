import React from 'react';
import {
    Dimensions,
    Platform,
    StatusBar,
    StyleSheet,
} from 'react-native';

export const Styles = StyleSheet.create({
    appBackground: {
        backgroundColor: 'dodgerblue', // Applies only to Status Bar
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
    },
    // The outer container to hold the navigation buttons
    navButtonAlign: { 
        backgroundColor: 'dodgerblue', // Not to be seen!
        flexDirection: "row", 
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    // Navigation Button style for Selected and Non-Selected states
    navButtonSelect: {
        // Backing
        backgroundColor: "royalblue",
        height: 45,
        width: (true) ? Dimensions.get("screen").width / 3: 120,

        // Text
        color: "dodgerblue",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18,
        fontWeight: "bold",

        // Boarder
        borderStyle: "solid",
        borderWidth: 3.5,
        borderRadius: 45 / 2, // Magic number is from the height! (half of the current height)
        borderColor: "gainsboro",
        backgroundColor: "white"
    },
    navButtonNonSelect: {
        // Backing
        backgroundColor: "dodgerblue",
        height: 55,
        width: (true) ? Dimensions.get("screen").width / 3 : 120,

        // Text
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    // REMOVE: Just playing around with border styles
    info: {
        // backgroundColor: 'green',
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "gainsboro"
    },
    // Divides the two main screen sections. Relative ration can be set here.
    top: {
        backgroundColor: "white",
        alignItems: "center",
        flex: 3, // Top to Bottom Ratio
    },
    topText: {
        backgroundColor: "white",
        alignItems: "center",
        flex: 1,
        width: Dimensions.get("screen").width,

        // Text
        color: "dodgerblue",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 48,
        fontWeight: "bold",
    },

    bottom: {
        backgroundColor: "white",
        flex: 7, // Top to Bottom Ratio
    },
});