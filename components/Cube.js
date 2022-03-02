import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Decrement = (props) => {
  return (
    <View>
      <Pressable style={styles.btnInc} onPress={() => { props.setCount(props.Count * props.Count * props.Count) }}>
        <Text style={styles.btnIncText}>Cube</Text>
      </Pressable>
    </View>
  )
}

export default Decrement

const styles = StyleSheet.create({
  btnInc: {
    backgroundColor: '#F09C0B',
    width: '50%',
    height: '30%',
    marginLeft: '25%',
    bottom: '195%',
    elevation: 20
  },
  btnIncText: {
    marginLeft: '33%',
    marginTop: '4%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})
