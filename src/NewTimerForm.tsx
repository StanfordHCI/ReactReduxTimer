import { AppNavigator } from '../App';
import React, { useState } from 'react';
import { textStyles, commonStyles } from './commonStyles';
import { useAppDispatch, useAppSelector } from '../hooks';
import { add, getTimers, update } from '../reducers/timer';
import { TimeDelta } from '../helpers/TimeDelta';


const NewTimerFormImpl = (props: {id?: string}) => {
    const dispatch = useAppDispatch();
    const timers = useAppSelector(getTimers)
    const timer = props.id ? timers.find((timer) => timer.id === props.id) : null;
    const [hour, setHour] = useState(timer ? timer.delta.hour.toString() : '00');
    const [min, setMin] = useState(timer ? timer.delta.minute.toString() : '20');
    const [sec, setSec] = useState(timer ? timer.delta.second.toString() : '03');
    const [type, setType] = useState(timer ? timer.type : 'Default');
    const [content, setContent] = useState(timer ? timer.content : 'Default');

    return (
        <div style={commonStyles.appContainer}>
            <div style={commonStyles.timerFormContainer}>

                <div style={commonStyles.numericInputContainer}>
                    <input style={commonStyles.numericInput} type='number' min={0} max={60} value={hour} onChange={(e) => setHour(e.target.value)}/>
                    <label style={textStyles.heading}> : </label>
                    <input style={commonStyles.numericInput}  type='number' min={0} max={60} value={min}  onChange={(e) => setMin(e.target.value)} />
                    <label style={textStyles.heading}> : </label>
                    <input style={commonStyles.numericInput}  type='number' min={0} max={60} value={sec}  onChange={(e) => setSec(e.target.value)} />
                </div>

                <div style={commonStyles.sectionContainer}>
                    <label style={textStyles.label}>Title </label>
                    <input style={commonStyles.textInput} type='text' size={20} value={type} onChange={(e)=> setType(e.target.value)} ></input>
                    <label style={textStyles.label}>Description </label>
                    <input style={commonStyles.textInput} type='text' size={20} value={content} onChange={(e)=> setContent(e.target.value)} ></input>
                </div>

                <button style={commonStyles.button} onClick={() => AppNavigator.pop()}>Back</button>
                <button style={commonStyles.button} onClick={() => {
                    const delta = new TimeDelta({
                        hour: parseInt(hour),
                        minute: parseInt(min),
                        second: parseInt(sec)})
                    if (props.id && timer) {
                        dispatch(
                            update({
                                id: props.id,
                                content,
                                type,
                                delta,
                                finished: false,
                                pause: false,
                                createdTime: Date.now(),
                            })
                        )
                    } else {
                        dispatch(
                            add({
                                id: `${timers.length + 1}`,
                                content,
                                type,
                                delta,
                                finished: false,
                                pause: false,
                                createdTime: Date.now(),
                            })
                        )
                    }

                    AppNavigator.pop();

                    }
                }>{timer ? 'Update Timer' : 'Add Timer'}</button>

            </div>
        </div>
    );
};

// TODO: update below code export your new timer form forReact Genie
export const NewTimerForm = NewTimerFormImpl 

