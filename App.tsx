import React, { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [isCallRunning, setCallRunning] = useState(false);
  const [data, setData] = useState('Press Any Button');

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const handleClick = () => {
    if(isCallRunning){
      console.error("Already a Call Running!!!");
    }else{
      setCallRunning(true);
      setTimeout(()=>{
        setData("Name: Lakshay");
        setCallRunning(false);
      }, getRandomNumber(3, 7)*1000);
    }
  }
  return (
    <View style={styles.container}>
      <Text>
        {isCallRunning ? <ActivityIndicator size='large' /> : <Text style={styles.data}>{data}</Text>}
      </Text>
      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={handleClick}>
          <Text>Click Me</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleClick}>
          <Text>Click Me</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleClick}>
          <Text>Click Me</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  button: { 
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    marginTop: 100
  },
  buttonView: {
    display: 'flex', 
    flexDirection: 'row'
  },
  data: {
    fontSize: 20,
  }
});

export default App;
