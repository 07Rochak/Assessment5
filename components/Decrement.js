import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Decrement = (props) => {
  return (
    <View>
      <Pressable style={styles.btnInc} onPress={() => { props.setCount(props.Count - 1) }}>
        <Text style={styles.btnIncText}>Decrement</Text>
      </Pressable>
    </View>
  )
}

export default Decrement

const styles = StyleSheet.create({
  btnInc: {
    backgroundColor: '#39A837',
    width: '50%',
    height: '30%',
    marginLeft: '25%',
    bottom: '35%',
    elevation: 20
  },
  btnIncText: {
    marginLeft: '18%',
    marginTop: '4%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})
