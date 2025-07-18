import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";

export default function App(){
  return(
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>📝To-Do List</Text>
      <View style={styles.subContainer}>
        <TextInput 
          style={styles.inputText}/>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listHeading}>Pending Tasks:</Text>
        <View style={styles.taskContainer}>
          <Text style={styles.taskItem}>do something</Text>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  rootContainer:{},
  heading:{},
  subContainer:{},
  inputText:{},
  button:{},
  buttonText:{},
  listContainer:{},
  listHeading:{},
  taskContainer:{},
  taskItem:{},
});