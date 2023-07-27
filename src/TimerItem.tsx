import {AppNavigator} from "../App";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { commonStyles, textStyles } from './commonStyles';

const TimerItemImpl = (props: {id: string}) => {
    const [actionButtonText, setActionButtonText] = useState("Start");
    
    // TODO: get your timer, type, content, date, and time from React Genie 

    useEffect(() => {
        // TODO: If the timer is 0, we don't need to decrease it further, so return

        const intervalId = setInterval(() => {   
            // TODO: add timer countdown action here
        }, 1000);

        return () => clearInterval(intervalId);
    }, [
        // TODO: Add relevant changing variables here
    ]);
   
    return (
        <View style={commonStyles.timerItemContainer}>

            <Pressable onPress={() => {AppNavigator.push('TimerModal', {id: props.id})}}>
                <View style={commonStyles.inline}>
                    <Text style={textStyles.heading2}>{'TODO: type'}</Text>
                    <Text style={textStyles.heading3}>{'TODO: hour'}:{'TODO: minute'}:{'TODO: second'} </Text>
                </View>
                <View style={commonStyles.inline}>
                    <Text style={textStyles.text}>{'TODO: content'} </Text>
                    <Text style={textStyles.text}>{'TODO: date'} </Text>
                </View>
            </Pressable>

            <button style={commonStyles.button} onClick={() => {}
                // TODO: Add your react genie call back here when start/pause button is clicked
                // if your timer is paused, start it on click, otherwise pause it. Change the text
                // using react state 'actionButtonText' respectively using setActionButtonText('Pause')
                // or setActionButtonText('Start')
            }>{actionButtonText}</button>
        </View>
    );
};

// TODO: update below code export your new timer form for React Genie
export const TimerItem = TimerItemImpl;
