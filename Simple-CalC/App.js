import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useState } from "react";

export default function Calculator(){

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  function onPressHandler(op){
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)){
    setResult('Enter  valid numbers!');
    return;
    }

    let res =0;
    if(op === '+') res = n1+n2;
    else if(op === '-') res = n1-n2;
    else if(op === 'x') res = n1*n2;
    else if(op === '÷') res = n2 !=0 ? n1/n2 : 'cannot divide by 0';
    setResult(res.toString());
 }

  return(
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Simple Calculator</Text>    
      <TextInput 
        style={styles.inputText}
        value={num1}
        keyboardType="number-pad"
        onChangeText={setNum1}/>
      <TextInput
        style={styles.inputText}
        value={num2}
        keyboardType="number-pad"
        onChangeText={setNum2} />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => onPressHandler('+')}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => onPressHandler('-')}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>    
        <Pressable style={styles.button} onPress={() => onPressHandler('x')}>
          <Text style={styles.buttonText}>x</Text>
        </Pressable>       
        <Pressable style={styles.button} onPress={() => onPressHandler('÷')}>
          <Text style={styles.buttonText}>÷</Text>
        </Pressable> 
      </View>
      <Text style={styles.resultText}>Result: {result}</Text>   
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  text:{
    color: '#f8f6f6ff',
    fontSize: 30,
    marginBottom: 20,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems: 'center'
  },
  inputText:{
    width: '80%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff'
  },
  buttonContainer:{
    flexDirection: 'row',
    gap:20,
  },
  button:{
    width: 60,
    height: 70,
    borderRadius: 5,
    marginTop: 30,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#333',
  },
  buttonText:{
    fontSize: 30,
    color: '#fff'
  },
  resultText:{
    marginTop: 30,
    fontSize: 27,
    color: '#0f0'
  },
});