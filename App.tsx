import React, { default as ReactFromImport } from "react";
import { default as ReactReduxFromImport, Provider } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationOptions } from "@react-navigation/stack/lib/typescript/src/types";
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';

import { TimerView } from "./src/TimerView";
import { NewTimerForm } from "./src/NewTimerForm";
import { createStore } from "redux";
import { NavigationContainer } from "@react-navigation/native";


export let AppNavigator: any = null;

type Props = NativeStackScreenProps<any, any>

const TimerTab = ({route, navigation}: Props) => {
    AppNavigator = navigation
    return (
        <TimerView/>
    )
}

const TimerModalTab = ({route, navigation}: Props) => {
    AppNavigator = navigation
    return (
          <NewTimerForm {...route.params}/>
    )
}

const cardStyle: StackNavigationOptions = {
    presentation: 'card' ,
    animationEnabled: true,
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}

const modalStyle: StackNavigationOptions = {
    presentation: 'modal' ,
    animationEnabled: true,
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
    headerShown: false,
    animationTypeForReplace: 'pop',
}

// const store = createStore({})

const App = () => {
    let TimerStack = () => {
        let TimerNavigator = createStackNavigator();
        return (
            
        <NavigationContainer>
            <TimerNavigator.Navigator screenOptions={{
                    headerShown: true
                }}>
                    <TimerNavigator.Screen name="Timers" component={TimerTab} options={cardStyle}/>
                    <TimerNavigator.Screen name="TimerModal" component={TimerModalTab} options={modalStyle}  />
                
                </TimerNavigator.Navigator >

        </NavigationContainer>
        );
    }

  return (
    // TODO: wrap TimerStack with relevant providers for React Genie
    // <div>HELLO</div>?
    // <Provider store={}>
          <TimerStack/>
        // </Provider>
  );
};

export default App;
