import { AppNavigator } from '../App';
import { Timer } from '../genie/Timer';
import React, { useState } from 'react';
import { textStyles, commonStyles } from './commonStyles';


const NewTimerFormImpl = (props: {id: string}) => {
    // TODO: Initialize your timer with React Genie
    const [hour, setHour] = useState('TODO: Add your timer hour data here');
    const [min, setMin] = useState('TODO: Add your timer minute data here');
    const [sec, setSec] = useState('TODO: Add your timer second data here');
    const [content, setContent] = useState('TODO: Add your timer content data here');
    const [type, setType] = useState('TODO: Add your timer type data here');

    return (
        <div style={commonStyles.appContainer}>
            <div style={commonStyles.timerFormContainer}>

                <div style={commonStyles.numericInputContainer}>
                    <input style={commonStyles.numericInput} type='number' min={0} max={60} value={hour} onChange={(e) => setHour(parseInt(e.target.value))}/>
                    <label style={textStyles.heading}> : </label>
                    <input style={commonStyles.numericInput}  type='number' min={0} max={60} value={min}  onChange={(e) => setMin(parseInt(e.target.value))} />
                    <label style={textStyles.heading}> : </label>
                    <input style={commonStyles.numericInput}  type='number' min={0} max={60} value={sec}  onChange={(e) => setSec(parseInt(e.target.value))} />
                </div>

                <div style={commonStyles.sectionContainer}>
                    <label style={textStyles.label}>Title </label>
                    <input style={commonStyles.textInput} type='text' size={20} value={type} onChange={(e)=> setType(e.target.value)} ></input>
                    <label style={textStyles.label}>Description </label>
                    <input style={commonStyles.textInput} type='text' size={20} value={content} onChange={(e)=> setContent(e.target.value)} ></input>
                </div>

                <button style={commonStyles.button} onClick={() => {}
                    // TODO
                    // Add your onClick callback here to go back using React Genie
                    // Make sure to add ` AppNavigator.pop();` at the end to return to previous screen
                }>Back</button>
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

