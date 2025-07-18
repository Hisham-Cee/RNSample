import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";


export default function App(){
  function buttonHandler(){};

  return(
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>📝  To-Do List</Text>
      <View style={styles.subContainer}>
        <TextInput 
          style={styles.inputText}
          placeholder="Enter new task ....."/>
        <Pressable style={styles.button} onPress={buttonHandler}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
        <Text style={styles.listHeading}>Pending Tasks:</Text>
        <View style={styles.taskContainer}>
          <Text style={styles.taskItem}>do something</Text>
          <Text style={styles.taskItem}>do something</Text>
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    padding: 20,
  },
  heading:{
    marginTop: 40,
    textAlign:"center",
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30
  },
  subContainer:{},
  inputText:{
    borderWidth:1,
    marginBottom: 15,
    borderRadius: 5
  },
  button:{
    backgroundColor: '#09219aff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 30
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  },
  listHeading:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  taskContainer:{
    
  },
  taskItem:{
    fontSize: 16,
    backgroundColor: '#2C2C2C',
    color: '#fff',
    height: 35,
    padding: 5,
    marginVertical: 7,
    borderRadius: 5
  },
});