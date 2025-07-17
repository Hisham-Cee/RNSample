import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useState } from "react";

export default function Calculator(){

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  function onPressHandler(op){
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2))
    setResult('Enter  valid numbers!');
    return;

    let res =0;
    if(op === '+') res = n1+n2;
    else if(op === '-') res = n1-n2;
    else if(op === 'x') res = n1*n2;
    else if(op === '/') res = n2 !=0 ? n1/n2 : '0 is not divisible by the number';
    setResult(res.toString());
 }

  return(
    <View style={styles.rootContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Simple Calculator</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputText}>
          <TextInput 
            value={num1}
            keyboardType="numeric"
            onChangeText={setNum1}/>
        </View>
        <View style={styles.inputText}>
          <TextInput
            value={num2}
            keyboardType="numeric"
            onChangeText={setNum2} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={onPressHandler}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={onPressHandler}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={onPressHandler}>
            <Text style={styles.buttonText}>x</Text>
          </Pressable>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={onPressHandler}>
            <Text style={styles.buttonText}>/</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Result: {result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40
  },
  textContainer:{},
  text:{
    fontSize: 24,
  },
  inputContainer:{},
  inputText:{},
  buttonContainer:{
    flexDirection: 'row',
    gap:20
  },
  buttons:{
   
  },
  button:{
    width: 50,
    height: 70,
    borderRadius: 3,
    padding: 4,
    justifyContent: 'center',
    alignItems:'center',
    
  },
  buttonText:{
    fontSize: 30,
  },
  resultContainer:{
    padding: 10,
    marginTop: 20,
    
  },
  resultText:{
    fontSize: 28,
  },
});