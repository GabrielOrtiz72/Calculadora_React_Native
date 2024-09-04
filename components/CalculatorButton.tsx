import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native'

const width = Dimensions.get('window').width / 5

export default function CalculatorButton(props: {
    onClick: (label: string) => void,
    text: string,
    operation?: boolean,
    double?: boolean,
    other?: boolean
}) {
    let style = [styles.basicButton]
    if (props.double) {
        style.push(styles.doubleButton)
    }
    if (props.operation) {
        style.push(styles.operation)
    }
    if (props.other) {
        style.push(styles.other)
    }

    return (
        <>
            <TouchableHighlight onPress={() => props.onClick(props.text)}>
                <Text style={style}>{props.text}</Text>
            </TouchableHighlight>
        </>
    )
}

const styles = StyleSheet.create({
    basicButton: {
        fontSize: 30,
        padding: 15,
        justifyContent: 'space-around',
        margin: 10,
        backgroundColor: '#A0A0A0',
        color: '#FFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: width,
        height: width,
        borderRadius: width
    },
    doubleButton: {
        fontSize: 30,
        padding: 15,
        justifyContent: 'space-around',
        margin: 10,
        backgroundColor: '#A0A0A0',
        color: '#FFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: width,
        borderRadius: width,
        width: width * 2.2
    },
    operation: {
        fontSize: 30,
        padding: 15,
        justifyContent: 'space-around',
        margin: 10,
        color: '#FFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: width,
        height: width,
        borderRadius: width,
        backgroundColor: '#FA8231'
    },
    other: {
        fontSize: 30,
        padding: 15,
        justifyContent: 'space-around',
        margin: 10,
        color: '#FFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: width,
        height: width,
        borderRadius: width,
        backgroundColor: '#404040'
    }
})