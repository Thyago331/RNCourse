import { StyleSheet, View, Text, Pressable } from 'react-native'
export default function GoalItem(props) {

  function removeGoalHandler() {
    props.onDelete(props.id)
  }

  return (
    <View style={styles.goalItem} >
      <Pressable
        android_ripple={{ color: 'red' }}
        onPress={removeGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem} // para iphone tem q fazer assim o feedback visual de clicado
      >
        <Text style={styles.goalText}> {props.text} </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc'
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    padding: 8,
    color: 'white'
  }
})

