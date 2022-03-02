import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Increment = (props) => {
  return (
    <View>
      <Pressable style={styles.btnInc} onPress={() => { props.setCount(props.Count + 1) }}>
        <Text style={styles.btnIncText}>Increment</Text>
      </Pressable>
    </View>
  )
}

export default Increment

const styles = StyleSheet.create({
  btnInc: {
    backgroundColor: 'red',
    width: '50%',
    height: '30%',
    marginLeft: '25%',
    top: '19%',
    elevation: 20
  },
  btnIncText: {
    marginLeft: '20%',
    marginTop: '4%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})
