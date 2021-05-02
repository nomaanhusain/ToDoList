import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './components/Tasks';

export default function App() {
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAddButton=()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
  }

  const completeTask=(index)=>{
    let tempCopy=[...taskItems];
    tempCopy.splice(index,1);
    setTaskItems(tempCopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <View><Text style={styles.sectionTitle}>Today's Task</Text></View>


        {/* Item List */}
        <View style={styles.items}>
          {
            taskItems.map((item,index)=>{
              return( 
              <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
              <Tasks note={item} />
              </TouchableOpacity>)
            })
          }
        </View>
      </View>


      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS==='android'?'height':'padding'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input}
        placeholder={'Write a new task!'}
        value={task}
        onChangeText={text=>setTask(text)}
        />
        <TouchableOpacity onPress={()=>handleAddButton()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  taskWrapper: {
    paddingTop:80,
    paddingHorizontal:20
  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold'
  },
  items: {
    marginTop:30
  },
writeTaskWrapper:{
  position:'absolute',
  bottom:60,
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center'
},
input:{
  paddingVertical:15,
  paddingHorizontal:15,
  backgroundColor:'#FFF',
  borderRadius:60,
  borderColor:'#c0c0c0',
  borderWidth:1,
  width:250,
},
addWrapper:{
  width:60,
  height:60,
  backgroundColor:'#fff',
  borderRadius:60,
  justifyContent:'center',
  alignContent:'center',
  borderColor:'#c0c0c0',
  borderWidth:1,
},
addText:{
  paddingLeft:25
}
});
