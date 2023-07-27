import { AppNavigator } from '../App';
import React, { useState } from 'react';
import { textStyles, commonStyles } from './commonStyles';


const NewTimerFormImpl = () => {
    // TODO: Initialize your timer with React Genie
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
                <button style={commonStyles.button} onClick={() => {}
                    // TODO
                    // Add your onClick callback here using React Genie to add a new timer using the form data
                    // Make sure to add ` AppNavigator.pop();` at the end to return to previous screen
                }>Add Timer</button>

            </div>
        </div>
    );
};

// TODO: update below code export your new timer form forReact Genie
export const NewTimerForm = NewTimerFormImpl 

