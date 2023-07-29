import { StyleSheet } from "react-native";

const font = {
    fontFamily: 'Tahoma',
    letterSpacing: 1.3,
}

export const textStyles = StyleSheet.create({
    heading: {
        ...font,
        letterSpacing: 1.3,
        color: 'white',
        fontSize: 50,
        fontWeight: '600',
    },
    heading2: {
        ...font,
        color: '#074057',
        fontWeight: '600',
        fontSize: 35,
    },
    heading3: {
        ...font,
        color: '#074057',
        fontWeight: '600',
        fontSize: 35,
    },
    label: {
        ...font,
        color: 'white',
        marginTop: 20,
        marginBottom: 10,
    },
    text: {
        ...font,
        fontSize: 16,
        color: '#455055',
    },
    subtitle: {
        ...font,
    }
})

export const commonStyles = StyleSheet.create({
    // Containers
    appContainer: {
        backgroundColor: '#0b3f55',
        paddingLeft: '10%',
        paddingRight: '10%',
        minHeight: '100%',
    },
    mainContainer: {
        flex: 1,
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    timerViewContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    timerItemContainer: {
        flex: 1,
        width: '100%',
        marginTop: 20,
        padding: 20,
        borderRadius: 6,
        backgroundColor: '#e7f9ff',
        textAlignVertical: 'center',
    },
    timerFormContainer: {
        textAlign: 'center',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 20,
        width: '100%',
    },
    // Common Elements
    button: {
        width: '100%',
        padding: 10,
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#5a8ca1',
        color: '#e6f8fe',
        fontWeight: 'bold',
        fontSize: "28px",
        borderRadius: 6,
        marginTop: 20,
        textAlign: 'center',
        ...font
    },
    inline: {
        flex: 2,
        width: '100%',
        justifyContent: 'space-between',
        height: '100%',
        flexDirection: 'row',
        marginBottom: 10,
    },
    // Add New Timer Form
    numericInputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    numericInput: {
        ...textStyles.heading,
        padding: 10,
        margin: 2,
        border: 'none',
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    textInput: {
        ...textStyles.text,
        padding: 15,
        border: 'none',
        width: 'calc(100% - 30px)',
        backgroundColor: '#c7f1ff',
        borderRadius: 6,
    },
})