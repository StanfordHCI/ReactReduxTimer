import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { TimeDelta } from '../helpers/TimeDelta'

// Define a type for the slice state
export interface TimerState {
    id: string,
    content: string,
    type: string,
    delta: TimeDelta,
    finished: boolean,
    pause: boolean,
    createdTime: number,
}
// Define the initial state using that type
const initialState: Array<TimerState> = []

export const timerSlice = createSlice({
  name: 'timer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, x:PayloadAction<TimerState>) => {
      console.log("HERE")
      state.push(x.payload)
    },
    update: (state, x:PayloadAction<TimerState>) => {
      const i = state.findIndex((el => el.id === x.payload.id))
      state[i] = x.payload
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    remove: (state, x:PayloadAction<TimerState>) => {
      const i = state.findIndex((el => el.id === x.payload.id))
      state.splice(i, 1)
    },
  },
})

export const { add, update, remove } = timerSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getSortedTimers = (state: RootState) => state.timer.sort((a: TimerState, b: TimerState) => {
        return a.createdTime.getMilliseconds() - b.createdTime.getMilliseconds();
    }).filter((element: TimerState) => {
        return element.finished === false;
    }).reverse();

export default timerSlice.reducer