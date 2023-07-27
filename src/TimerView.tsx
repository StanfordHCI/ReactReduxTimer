import React from "react";
import {AppNavigator} from "../App";
import {Timer} from "../genie/Timer";
import {View} from "react-native";
import { commonStyles } from "./commonStyles";
import { TimerItem } from "./TimerItem";

export const TimerView = () => {

    // TODO: Get all the timers . You can sort them using something like
        //     .sort((a: Timer, b: Timer) => {
        //         return a.createdTime.getDate().getTime() - b.createdTime.getDate().getTime();
        //     }
        //     ).filter((element) => {
        //         return element.finished === false;
        //     }).reverse());
    const allTimers = []

    return (
        <View style={commonStyles.appContainer}>
            <View>
            <div style={commonStyles.timerViewContainer}>
                <button style={commonStyles.button} onClick={() => AppNavigator.push('TimerModal')}>Add New Timer</button>
            </div>
            {
                
                allTimers.map((element) => {
                        return <TimerItem id={element.id} key={element.id}/>
                })
            }
            </View>
        </View>
    )
}