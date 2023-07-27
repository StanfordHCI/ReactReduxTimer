import React from "react";
import {AppNavigator} from "../App";
import {View} from "react-native";
import { commonStyles } from "./commonStyles";
import { TimerItem } from "./TimerItem";
import { useAppSelector } from "../hooks";
import { getSortedTimers } from "../reducers/timer";

export const TimerView = () => {
    const timers = useAppSelector(getSortedTimers);

    return (
        <View style={commonStyles.appContainer}>
            <View>
            <div style={commonStyles.timerViewContainer}>
                <button style={commonStyles.button} onClick={() => AppNavigator.push('TimerModal')}>Add New Timer</button>
            </div>
            {
                
                timers.map((timer) => {
                        return <TimerItem id={timer.id} key={timer.id} timer={timer} />
                })
            }
            </View>
        </View>
    )
}