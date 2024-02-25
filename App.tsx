import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>App main page</Text>
      <AntDesign name="stepforward" size={50} color={'blue'}/>
    </View>
  )
}

export default App