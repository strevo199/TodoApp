import React,{useState} from 'react'
import { StyleSheet,TextInput,Alert, Text, View,Button, } from 'react-native'
import uuid from 'uuid'

const TodoForm = ({setTodo}) => {
    const [text, setText] = useState('')

    const changeHandle =(val) =>{
        setText(val)
    }

    const submitHandler =(text) =>{
        if (text.length < 3) {
          Alert.alert('Opps','task mush be more than 3 charcter long',[{
            text:'Uderstood',
            onPress:() =>console.log('alert closed')
          }])
        } else {
          setTodo(prev =>[...prev,{id:uuid(),task:text}])
          setText('')
        }
      }

    return (
        
        <>
            <View style={styles.todoFormContainer}>
                <Text>Enter Todo:</Text>
                <TextInput
                placeholder='walk the cats'
                onChangeText ={changeHandle}
                value ={text}
                style={styles.todoForm}
                />
            </View>
            <View style={styles.todoBtn}>
                <Button
                title='Submit'
                color= '#320527'
                onPress ={()=>submitHandler(text)}
                />
            </View>
        </>
    
    )
}

export default TodoForm


const styles = StyleSheet.create({
    todoForm:{
        borderColor:'#2d3335c9',
        borderWidth: 1,
        borderStyle:'dotted',
        height: 40,
        width: 200,
        borderRadius: 10,
        flex: 1 
    },
    todoFormContainer:{
        paddingHorizontal:10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,

    },
    todoBtn:{
        marginHorizontal:60,
        marginTop: 20
    }
})
