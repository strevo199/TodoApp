import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,Alert,Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import NarBar from './components/NavBar'
import globalStyles from './global';
import uuid from 'uuid'
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';

export default function App() {
  const [todos, setTodo] = useState([])

  // const submitHandler =(text) =>{
  //   if (text.length < 3) {
  //     Alert.alert('Opps','task mush be more than 3 charcter long',[{
  //       text:'Uderstood',
  //       onPress:() =>console.log('alert closed')
  //     }])
  //   } else {
  //     setTodo(prev =>[...prev,{id:uuid(),task:text}])
  //   }
  // }

  const handleDelet =(id) =>{
    setTodo((prev) =>(
      prev.filter(todo => id !== todo.id)
    ))
}

  return (
    <TouchableWithoutFeedback
      onPress ={() =>{
        Keyboard.dismiss()
      }}
    >
      <View style={globalStyles.container}>
        <NarBar/>
        <TodoForm setTodo={setTodo}/>
        <TodoList handleDelet ={handleDelet} todos ={todos}/>
        <Footer/>
      </View>
    </TouchableWithoutFeedback>
    
  ); 
}

const appStyles = StyleSheet.create({
  
});
