import React from 'react';
import {
    Dimensions,
    Platform,
    StatusBar,
    StyleSheet,
} from 'react-native';

export const Styles = StyleSheet.create({
    // Base View of the eniter App
    appBackground: {
        backgroundColor: 'dodgerblue', // Only viewed from Status Bar
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // iOS covered by SafeAreaView
        flex: 1,
    },

    // Top Section
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

    // Bottom Section
    bottom: {
        backgroundColor: "white",
        flex: 7, // Top to Bottom Ratio
    },
    bottomSubSections: {
        // backgroundColor: 'green',
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "gainsboro"
    },

    scrollViewContainer1:
    {
        backgroundColor: "white",
        flex: 1,
        width: Dimensions.get("screen").width,
        alignItems: "center",
        justifyContent: "center",
    },
    scrollViewContainer2:
    {
        backgroundColor: "gainsboro",
        flex: 1,
        width: Dimensions.get("screen").width,
        alignItems: "center",
        justifyContent: "center",
    },
    scrollViewContainer3:
    {
        backgroundColor: "lightgrey",
        flex: 1,
        width: Dimensions.get("screen").width,
        alignItems: "center",
        justifyContent: "center",
    },
});


/** Style Sheet for NavButtons **/
let NavButtonHeight = 55;
let SlideBarHeight = 45;
let offset = 3.5;
export const NavButtonStyles = StyleSheet.create({
    Backing: {
        backgroundColor: 'dodgerblue',
        height: NavButtonHeight,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    PillBar: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: SlideBarHeight - (offset * 2),
        width: Dimensions.get("screen").width - (offset * 4),

        // Boarder
        borderStyle: "solid",
        borderRadius: SlideBarHeight / 2,
        backgroundColor: "royalblue", // "royalblue",
        // borderWidth: offset / 2,
        // borderColor: "gainsboro", // "gainsboro",
    },

    // Navigation Button style for Selected and Non-Selected states
    Select: {
        // Backing
        backgroundColor: "royalblue",
        height: SlideBarHeight,
        width: Dimensions.get("screen").width / 3,

        // Boarder
        borderStyle: "solid",
        borderRadius: SlideBarHeight / 2,
        backgroundColor: "white",
        borderWidth: offset,
        borderColor: "gainsboro",

        // Text
        color: "dodgerblue",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    NonSelect: {
        // Backing
        backgroundColor: "transparent", // Set to fully transparent
        height: NavButtonHeight,
        width: Dimensions.get("screen").width / 3,

        // Text
        color: "gainsboro", // "white",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
});