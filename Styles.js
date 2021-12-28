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
    topView: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: Dimensions.get("screen").width,
    },
    topText: {
        color: "orange", // "dodgerblue",
        fontSize: 48,
        fontWeight: "bold",
    },

    // Bottom Section
    bottom: {
        backgroundColor: "white",
        flex: 7, // Top to Bottom Ratio
    },
});


/** Style Sheet for NavButtons **/
let NavButtonHeight = 60;
let SlideBarHeight = 45;
let offset = 3.5;
export const NavButtonStyles = StyleSheet.create({
    Backing: {
        backgroundColor: 'dodgerblue',
        height: NavButtonHeight,
        width: Dimensions.get("screen").width,
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    PillBar: {
        flexDirection: "row",
        alignItems: "center",
        height: SlideBarHeight - (offset * 2),
        width: Dimensions.get("screen").width - (offset * 4),

        // Boarder
        backgroundColor: "royalblue", // "royalblue",
        borderRadius: SlideBarHeight / 2,
    },

    buttonView: {
        // Backing
        backgroundColor: "transparent", // Set to fully transparent
        height: NavButtonHeight,
        width: Dimensions.get("screen").width / 3,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    box: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: Dimensions.get("screen").width / 3,
    },

    // Selected Navigation Button Style
    SelectView: {
        // Backing
        height: SlideBarHeight,
        width: Dimensions.get("screen").width / 3, // - (offset * 4),
        justifyContent: "center",
        alignItems: "center",

        // Boarder
        backgroundColor: "white",
        borderRadius: SlideBarHeight / 2,
        borderColor: "gainsboro",
        borderStyle: "solid",
        borderWidth: offset,
    },
    SelectText: {
        // Text
        color: "dodgerblue",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },

    // Non-Selected Navigation Button Style
    NonSelectView: {
        height: NavButtonHeight,
        width: Dimensions.get("screen").width / 3, // - (offset * 4),
        justifyContent: "center",
        alignItems: "center",
    },
    NonSelectText: {
        // Text
        color: "gainsboro",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
});


/** ScrollViewStyles **/
export const ScrollViewStyles = StyleSheet.create({
    Left:
    {
        backgroundColor: "white",
        flex: 1,
        width: Dimensions.get("screen").width,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    Center:
    {
        backgroundColor: "gainsboro",
        flex: 1,
        width: Dimensions.get("screen").width,
        alignItems: "center",
        justifyContent: "center",
    },
    Right:
    {
        backgroundColor: "lightgrey",
        flex: 1,
        width: Dimensions.get("screen").width,
        alignItems: "center",
        justifyContent: "center",
    },
});


/** MPGLogStyle **/
let mpgLogHeight = 100;
export const MPGLogStyle = StyleSheet.create({
    Graph:
    {
        width: Dimensions.get("screen").width,
        height: 220, // Dimensions.get("screen").height / 4,
        backgroundColor: "azure",
    },
    sectionBar:
    {
        width: Dimensions.get("screen").width,
        height: 30,
        backgroundColor: "white",
        borderColor: "gainsboro",
        justifyContent: "center",
        borderTopWidth: 1,
    },
    sectionBarText: {
        color: "darkgrey",
        fontWeight: "bold",
        fontStyle: "italic"
    },
    LogEdit:
    {
        width: Dimensions.get("screen").width / 4, // add 1/4 screen width
        height: mpgLogHeight,
        backgroundColor: "dodgerblue",
        opacity: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    LogDelete:
    {
        width: Dimensions.get("screen").width / 4, // add 1/4 screen width
        height: mpgLogHeight,
        backgroundColor: "red",
        opacity: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    Log:
    {
        width: Dimensions.get("screen").width,
        height: mpgLogHeight,
        backgroundColor: "azure",
    },

});