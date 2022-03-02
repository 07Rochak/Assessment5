import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Decrement = (props) => {
  return (
    <View>
      <Pressable style={styles.btnInc} onPress={() => { props.setCount(0) }}>
        <Text style={styles.btnIncText}>Reset</Text>
      </Pressable>
    </View>
  )
}

export default Decrement

const styles = StyleSheet.create({
  btnInc: {
    backgroundColor: '#0B42F0',
    width: '50%',
    height: '30%',
    marginLeft: '25%',
    elevation: 20,
    bottom: '90%'
  },
  btnIncText: {
    marginLeft: '33%',
    marginTop: '4%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})
