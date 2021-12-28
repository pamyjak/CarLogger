import React from 'react';
import {
    Pressable,
    Text,
    ScrollView,
    View,
} from 'react-native';
import { MPGLogStyle } from './Styles';


/** MPGLog **/
export class MPGLog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let mpg = Math.round(this.props.miles / this.props.gallons * 100) / 100;
        return (
            <ScrollView
                ref={scrollView => { this.scrollView = scrollView }}
                horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}
                onScrollEndDrag={() => setTimeout(() => { this.scrollView.scrollTo({ x: 0, y: 0, animated: true }) }, 500)}
            >
                {/* Main Log Item */}
                <View style={MPGLogStyle.Log}>

                    {/* INFO: Date, Milage, Gallons */}
                    <View>
                        <Text> Milage: {this.props.milage} </Text>
                        <Text> Miles: {this.props.miles} </Text>
                        <Text> Gallons: {this.props.gallons} </Text>
                        <Text> MPG: {mpg} </Text>
                        {/* <Text> Date: {this.props.date} </Text> */}
                    </View>

                </View>

                {/* Item Edit Button */}
                <Pressable onPress={() => console.log("Edit!")}>
                    <View style={MPGLogStyle.LogEdit}>
                        <Text> Edit </Text>
                    </View>
                </Pressable>

                {/* Item Delete Button */}
                <Pressable onPress={() => console.log("Delete!")}>
                    <View style={MPGLogStyle.LogDelete}>
                        <Text> Delete </Text>
                    </View>
                </Pressable>
            </ScrollView>
        )
    }
}