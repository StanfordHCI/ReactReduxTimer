import { AppNavigator } from "../App";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { commonStyles, textStyles } from './commonStyles';
import { TimerState, getTimers, update } from "../reducers/timer";
import { useAppDispatch, useAppSelector } from "../hooks";
import { TimeDelta } from "../helpers/TimeDelta";

const TimerItemImpl = (props: { id: string, initialTimer: TimerState }) => {
    const dispatch = useAppDispatch();
    const timers = useAppSelector(getTimers);
    const timer = props.id ? timers.find((t) => t.id === props.id) : props.initialTimer;
    const [actionButtonText, setActionButtonText] = useState(timer?.pause ? "Start" : "Pause");

    useEffect(() => {
        let intervalId: NodeJS.Timer;

        if (timer?.delta.getLeftSecond() === 0 || timer?.pause) {
            return;
        }

        intervalId = setInterval(() => {
            countDown();
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timer?.pause]);

    const countDown = () => {
        if (!timer || timer.pause) {
            return;
        }

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

    const toggleTimerPause = () => {
        if (!timer) {
            return
        }
        const newPauseState = !timer.pause;
        dispatch(update({ ...timer, pause: newPauseState }));
        setActionButtonText(newPauseState ? "Start" : "Pause");
    };

    if (!timer) {
        return null; // You should return something here or render an error message
    }

    return (
        <View style={commonStyles.timerItemContainer}>
            <Pressable onPress={() => { AppNavigator.push('TimerModal', { id: props.id }) }}>
                <View style={commonStyles.inline}>
                    <Text style={textStyles.heading2}>{timer.type}</Text>
                    <Text style={textStyles.heading3}>{timer.delta.toString()} </Text>
                </View>
                <View style={commonStyles.inline}>
                    <Text style={textStyles.text}>{timer.content} </Text>
                    <Text style={textStyles.text}>{new Date(timer.createdTime).toDateString()} </Text>
                </View>
            </Pressable>

            <Pressable
                style={commonStyles.button}
                onPress={toggleTimerPause}
            >
                {actionButtonText}
            </Pressable>
        </View>
    );
};

export const TimerItem = TimerItemImpl;
