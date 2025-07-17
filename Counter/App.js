//Counter-App

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0);

  function resetHandler(){
    setCount(count === 0)
  };

  function minusHandler(){
    if(count > 0){
    setCount(count - 1);}
  }

  function plusHandler(){
    if (count < 100)
    setCount(count + 1);
  }

  return (
    <View style={styles.main}>
      <View style={styles.counterContainer}>  
        <Text style={styles.counter}>{count}</Text>
        <Pressable style={styles.resetContainer} onPress={resetHandler}>
          <Text style={styles.resetText}>Reset</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={minusHandler}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={plusHandler}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable> 
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingTop: 90,
  },
  counter:{
    color: "#fff",
    fontSize: 150,
    marginBottom: 20,
  },
  resetContainer:{
    backgroundColor: 'red',
    borderRadius: 35,
    width: 130,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 25
  },
  resetText:{
    color: '#fff',
    fontSize: 20
  },
  buttonContainer:{
    width: '100%',
    alignItems: 'center',
  },
  buttons:{
    flexDirection: 'row',
    gap: 70,
    paddingBottom: 60
  },
  button:{
    backgroundColor: '#333',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white'
    
  },
  buttonText:{
    color: '#fff',
    fontSize: 50,
  }
});
