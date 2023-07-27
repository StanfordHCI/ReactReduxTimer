import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { TimeDelta } from '../helpers/TimeDelta'

// Define a type for the slice state
interface TimerState {
    id: string,
    content: string,
    type: string,
    delta: TimeDelta,
    finished: boolean,
    pause: boolean,
    createdTime: Date,
}

// Define the initial state using that type
const initialState: Array<TimerState> = []

export const timerSlice = createSlice({
  name: 'timer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, payload:any) => {
      state.push(payload)
    },
    update: (state, payload:any) => {
      // TODO: state find by id and update with new data
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    remove: (state, payload) => {
      // TODO find by id in state and delete
    },
  },
})

export const { add, update, remove } = timerSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getSortedTimers = (state: RootState) => state.sort((a: TimerState, b: TimerState) => {
        return a.createdTime.getMilliseconds() - b.createdTime.getMilliseconds();
    }).filter((element: TimerState) => {
        return element.finished === false;
    }).reverse();

export default timerSlice.reducer