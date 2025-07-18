// import React, { useState } from 'react';
// import { View, Text, TextInput, Pressable, FlatList, StyleSheet } from 'react-native';

// export default function TodoList() {
//   const [task, setTask] = useState('');
//   const [taskList, setTaskList] = useState([]);

//   function addTask() {
//     if (task.trim() === '') return;
//     setTaskList([...taskList, { id: Date.now().toString(), text: task }]);
//     setTask('');
//   }

//   function deleteTask(id) {
//     setTaskList(taskList.filter(item => item.id !== id));
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>📝 To-Do List</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter a task"
//         placeholderTextColor="#ccc"
//         value={task}
//         onChangeText={setTask}
//       />
//       <Pressable style={styles.addButton} onPress={addTask}>
//         <Text style={styles.addButtonText}>Add</Text>
//       </Pressable>
//       <FlatList
//         data={taskList}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <Pressable onPress={() => deleteTask(item.id)}>
//             <Text style={styles.taskItem}>• {item.text}</Text>
//           </Pressable>
//         )}
//         style={styles.taskList}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     padding: 20,
//     paddingTop: 60,
//   },
//   heading: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     backgroundColor: '#222',
//     color: '#fff',
//     padding: 10,
//     borderRadius: 6,
//     borderColor: '#555',
//     borderWidth: 1,
//     marginBottom: 10,
//   },
//   addButton: {
//     backgroundColor: '#0f0',
//     padding: 10,
//     borderRadius: 6,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   addButtonText: {
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   taskList: {
//     marginTop: 10,
//   },
//   taskItem: {
//     color: '#fff',
//     backgroundColor: '#111',
//     padding: 10,
//     borderRadius: 6,
//     marginBottom: 10,
//     fontSize: 16,
//   },
// });

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