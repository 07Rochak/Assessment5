import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Decrement = (props) => {
  return (
    <View>
      <Pressable style={styles.btnInc} onPress={() => { props.setCount(props.Count * props.Count) }}>
        <Text style={styles.btnIncText}>Square</Text>
      </Pressable>
    </View>
  )
}

export default Decrement

const styles = StyleSheet.create({
  btnInc: {
    backgroundColor: '#C00BF0',
    width: '50%',
    height: '30%',
    marginLeft: '25%',
    bottom: '145%',
    elevation: 20
  },
  btnIncText: {
    marginLeft: '28%',
    marginTop: '4%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})
