import {AppNavigator} from "../App";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { commonStyles, textStyles } from './commonStyles';
import { TimerState, update } from "../reducers/timer";
import { useAppDispatch } from "../hooks";

const TimerItemImpl = (props: {id: string, timer: TimerState}) => {
    const dispatch = useAppDispatch();
    const {id, timer} = props;
    const [actionButtonText, setActionButtonText] = useState("Start");

    useEffect(() => {
        // If the timer is 0, we don't need to decrease it further, so return
        if (timer.delta.getLeftSecond() === 0) {
            return
        }

        const intervalId = setInterval(() => {   
            countDown()
        }, 1000);

        return () => clearInterval(intervalId);
    }, [
        timer.delta.getLeftSecond()
    ]);

    const countDown: () => void = () => {
        if (!timer.pause) {
            let sec = timer.delta.getLeftSecond();
            sec = sec - 1;
            if (sec <= 0) {
                timer.finished = true;
                return;
            }
            timer.delta.hour = Math.floor(sec / 3600);
            timer.delta.minute = Math.floor(sec / 60 % 60);
            timer.delta.second = Math.floor(sec % 60);
            dispatch( update({...timer}))
        }
    }
   
    return (
        <View style={commonStyles.timerItemContainer}>

            <Pressable onPress={() => {AppNavigator.push('TimerModal', {id: id})}}>
                <View style={commonStyles.inline}>
                    <Text style={textStyles.heading2}>{timer.type}</Text>
                    <Text style={textStyles.heading3}>{timer.delta.toString()} </Text>
                </View>
                <View style={commonStyles.inline}>
                    <Text style={textStyles.text}>{timer.content} </Text>
                    <Text style={textStyles.text}>{new Date(timer.createdTime).toDateString()} </Text>
                </View>
            </Pressable>

            <button style={commonStyles.button} onClick={() => {
                if (actionButtonText === "Start") {
                    dispatch( update({...timer, pause: false}))
                    setActionButtonText("Pause")
                } else {
                    dispatch( update({...timer, pause: true}))
                    setActionButtonText("Start")
                }
            }
            }>{actionButtonText}</button>
        </View>
    );
};

// TODO: update below code export your new timer form for React Genie
export const TimerItem = TimerItemImpl;
