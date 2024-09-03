import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';
import { useState } from 'react';
export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)

    };

    function HandleAdd() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image 
                source={require('../assets/images/goal.png')}
                style={styles.image} />
                <TextInput
                    value={enteredGoalText}
                    style={styles.textInput}
                    placeholder='Seu objetivo no curso--'
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={props.onClose}
                            color="#f31282"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="add goal"
                            onPress={HandleAdd}
                            color="#5e0acc"
                        />
                    </View>

                </View>
            </View>
        </Modal>

    );
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        padding: 16,
        color: '#120438'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})

