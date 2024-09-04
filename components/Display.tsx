import { StyleSheet, Text, View } from 'react-native'

interface DisplayValue {
    text: string
}

export default function Display(props: DisplayValue) {
    return (
        <View style={styles.container}>
            <Text style={styles.displayText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        justifyContent: 'flex-end',
        flex: 1
    },
    displayText: {
        fontSize: 60,
        color: '#FFF',
        textAlign: 'right'
    }
})