import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import Reset from './components/Reset'
import Square from './components/Square'
import Cube from './components/Cube'

export const UserContext = React.createContext()

export default function App () {
  const [Count, setCount] = useState(0)
  return (
    <SafeAreaView style={styles.container}>
      <UserContext.Provider value={Count}>
        <CtnPanel
          Count={Count}
          setCount={setCount}
        />
      </UserContext.Provider>
      <StatusBar style='dark' />
    </SafeAreaView>
  )
}
function CtnPanel (props) {
  return (
    <>
      <Text style={styles.head}>Android Club Assessment 5</Text>
      <SafeAreaView style={styles.ctnContainer}>
        <View style={styles.ctnCnt}>
          <Text style={styles.ctnTitle}>Context Based Application</Text>
          <Text style={styles.ctnHead}>The Content is: </Text>
          <UserContext.Consumer>
            {value => <Text style={styles.ctnNo}>{value}</Text>}
          </UserContext.Consumer>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.btnContainer}>
        <Increment
          setCount={props.setCount}
          Count={props.Count}
        />
        <Decrement
          setCount={props.setCount}
          Count={props.Count}
        />
        <Reset
          setCount={props.setCount}
          Count={props.Count}
        />
        <Square
          setCount={props.setCount}
          Count={props.Count}
        />
        <Cube
          setCount={props.setCount}
          Count={props.Count}
        />
      </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0BF0E4'
  },
  ctnContainer: {
    width: '90%',
    height: '25%',
    marginLeft: '5%',
    backgroundColor: 'white',
    borderRadius: 25,
    top: '8%',
    elevation: 20
  },
  ctnCnt: {
    width: '90%',
    height: '88%',
    marginLeft: '5%',
    top: '6%'
  },
  ctnTitle: {
    fontSize: 21.5,
    fontWeight: 'bold'
  },
  ctnHead: {
    fontSize: 21,
    marginLeft: '24%',
    fontWeight: 'bold',
    top: '14%'
  },
  ctnNo: {
    fontSize: 20,
    marginLeft: '47%',
    top: '19%',
    fontWeight: 'bold'
  },
  head: {
    top: '6%',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '10%'
  },
  btnContainer: {
    marginLeft: '5%',
    top: '12%',
    height: '63%',
    width: '90%',
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 20
  },
  btnInc: {
    backgroundColor: 'red'
  }
})
