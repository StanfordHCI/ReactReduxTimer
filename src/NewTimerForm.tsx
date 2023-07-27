import { AppNavigator } from '../App';
import React, { useState } from 'react';
import { textStyles, commonStyles } from './commonStyles';
import { useAppDispatch } from '../hooks';
import { add } from '../reducers/timer';
import { TimeDelta } from '../helpers/TimeDelta';


const NewTimerFormImpl = () => {
    const dispatch = useAppDispatch();
    const [hour, setHour] = useState('00');
    const [min, setMin] = useState('20');
    const [sec, setSec] = useState('03');
    const [type, setType] = useState('Default');
    const [content, setContent] = useState('Default');

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
                    
                    dispatch(
                        add({
                            id: "TBD Unique ID",
                            content,
                            type,
                            delta,
                            finished: false,
                            pause: false,
                            createdTime: Date.now(),
                        })
                    )

                    AppNavigator.pop();

                    }
                }>Add Timer</button>

            </div>
        </div>
    );
};

// TODO: update below code export your new timer form forReact Genie
export const NewTimerForm = NewTimerFormImpl 

